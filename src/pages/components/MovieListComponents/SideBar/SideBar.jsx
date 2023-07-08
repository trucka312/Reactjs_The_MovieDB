/* eslint-disable max-len */
import { useForm } from 'react-hook-form'
import { Checkbox, FormControlLabel } from '@mui/material'
import { checkboxControlStyle } from 'constants/formControlLabelStyle'
import {
  AVAILABILITIES_VALUE,
  DEFAULT_FORM_VALUE,
  FILTER_FORM_VALUE,
  RADIO_VALUE,
  RELEASE_DATE_VALUE,
  RUNTIME_VALUE,
  USER_SCORE_VALUE,
  VOTE_SLIDER_VALUE,
} from 'constants/forms'
import { useEffect, useRef, useState } from 'react'
import { getGenres } from 'apis/movieListApi'
import _ from 'lodash'
import { formatDateForm } from 'utils/formatDate'
import { SET_LOADING_PARAM, SET_PARAMS } from 'app/redux/slices/moviePageSlice'
import { useDispatch, useSelector } from 'react-redux'
import SelectBox from '../SelectBox'
import { ToggleBox, ToggleBoxItem } from '../ToggleBox'
import { DoubleSlider, SingleSlider } from '../Slider'
import Tag from '../Tag'
import DatePicker from '../DatePicker'
import CheckBoxGroup from '../CheckBoxGroup'
import RadioGroupSelect from '../RadioGroupSelect'
import ProviderSelectList from '../ProviderSelect'
import CheckBoxGroupWithBoxSelect from '../CheckBoxGroup/CheckBoxGroupWithBoxSelect'
import KeywordSelect from '../KeywordSelect'
import loadingIcon from '../../../../assets/image/ripple.gif'

const SideBar = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    reset,
    formState: { dirtyFields },
  } = useForm({
    defaultValues: DEFAULT_FORM_VALUE,
  })
  const { countries, countriesLoading, languages, languagesLoading, loadingParams } = useSelector(
    (state) => state.moviePage,
  )
  const [tagList, setTagList] = useState([])

  const buttonRef = useRef()
  const buttonFixRef = useRef()

  const dispatch = useDispatch()
  const onSubmit = (data) => {
    let temp = _.omitBy(data, _.isNil)
    let formObj = {}

    Object.entries(temp).forEach(([key, value]) => {
      key = key.replace('-', '.')
      if (_.isObject(value) && !_.isArray(value)) {
        formObj[key] = formatDateForm(value.$d)
      } else if (_.isArray(value)) {
        if (key !== 'with_genres') formObj[key] = value.join('|')
        else formObj[key] = value.join(',')
      } else {
        formObj[key] = String(value)
      }
    })
    formObj = _.omitBy(formObj, _.isEmpty)
    dispatch(SET_PARAMS(formObj))
    dispatch(SET_LOADING_PARAM(true))
  }

  useEffect(() => {
    if (!loadingParams) reset({}, { keepValues: true })
  }, [reset, loadingParams])

  useEffect(() => {
    let observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (!_.isEmpty(dirtyFields)) buttonFixRef.current.classList.remove('hidden')
        buttonFixRef.current.classList.add('hidden')
      } else {
        if (!_.isEmpty(dirtyFields)) buttonFixRef.current.classList.add('hidden')
        buttonFixRef.current.classList.remove('hidden')
      }
    })
    observer.observe(buttonRef.current)
    return () => {
      observer.disconnect()
    }
  }, [dirtyFields])

  useEffect(() => {
    const getGenresData = async () => {
      const rs = await getGenres()
      setTagList(rs.data.genres)
    }
    getGenresData()
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ToggleBox header='Sort' defaultOpen>
        <ToggleBoxItem header='Sort by'>
          <SelectBox list={FILTER_FORM_VALUE} setValue={setValue} id='sort_by' />
        </ToggleBoxItem>
      </ToggleBox>
      <ToggleBox header='Filters'>
        <ToggleBoxItem header='Show me' iconMessage="Log in to filter items you've watched.">
          <RadioGroupSelect list={RADIO_VALUE} />
        </ToggleBoxItem>
        <ToggleBoxItem header='Availabilities'>
          <CheckBoxGroup list={AVAILABILITIES_VALUE} setValue={setValue} name='with_ott_monetization_types' />
        </ToggleBoxItem>
        <ToggleBoxItem header='Release Dates'>
          {!countriesLoading && (
            <CheckBoxGroupWithBoxSelect
              name='with_release_type'
              list={RELEASE_DATE_VALUE}
              listBox={countries}
              setValue={setValue}
              listboxName='region'
            />
          )}
          <DatePicker title='from' control={control} name='release_date-gte' />
          <DatePicker title='to' control={control} name='release_date-lte' />
        </ToggleBoxItem>
        <ToggleBoxItem header='Genres'>
          <div className='flex flex-wrap gap-[0.8rem]'>
            {tagList.map((item) => (
              <Tag key={item.id} id={item.id} name={item.name} register={register} fieldname='with_genres' />
            ))}
          </div>
        </ToggleBoxItem>
        <ToggleBoxItem header='Certificate' />
        <ToggleBoxItem header='Languages' iconMessage='Filter items based on their original language.'>
          {!languagesLoading && (
            <SelectBox list={languages} setValue={setValue} haveSearchBar id='with_original_language' />
          )}
        </ToggleBoxItem>
        <ToggleBoxItem header='User Score'>
          <DoubleSlider
            name='vote_average'
            min={USER_SCORE_VALUE.min}
            max={USER_SCORE_VALUE.max}
            step={USER_SCORE_VALUE.step}
            bigStepList={USER_SCORE_VALUE.bigStepList}
            templateString={USER_SCORE_VALUE.templateString}
            setValue={setValue}
          />
        </ToggleBoxItem>
        <ToggleBoxItem header='Minimum User Votes'>
          <SingleSlider
            name='vote_count-gte'
            min={VOTE_SLIDER_VALUE.min}
            max={VOTE_SLIDER_VALUE.max}
            step={VOTE_SLIDER_VALUE.step}
            bigStepList={VOTE_SLIDER_VALUE.bigStepList}
            setValue={setValue}
          />
        </ToggleBoxItem>
        <ToggleBoxItem header='Runtime'>
          <DoubleSlider
            name='with_runtime'
            min={RUNTIME_VALUE.min}
            max={RUNTIME_VALUE.max}
            step={RUNTIME_VALUE.step}
            bigStepList={RUNTIME_VALUE.bigStepList}
            templateString={RUNTIME_VALUE.templateString}
            setValue={setValue}
          />
        </ToggleBoxItem>
        <ToggleBoxItem header='Keywords'>
          <KeywordSelect setValue={setValue} name='with_keywords' />
        </ToggleBoxItem>
      </ToggleBox>
      <ToggleBox header='Where to Watch'>
        <ToggleBoxItem header='My Services' iconMessage='Log in to manage your subscribed services.'>
          <FormControlLabel
            control={<Checkbox checked={false} disableRipple disabled />}
            label='Restrict searches to my subscribed services?'
            sx={checkboxControlStyle}
          />
        </ToggleBoxItem>
        <ToggleBoxItem header='Country'>
          {!countriesLoading && <SelectBox list={countries} setValue={setValue} haveSearchBar id='ott_region' />}
          <ProviderSelectList register={register} watch={watch} setValue={setValue} />
        </ToggleBoxItem>
      </ToggleBox>
      <button
        ref={buttonRef}
        disabled={_.isEmpty(dirtyFields)}
        type='submit'
        className='mt-[1rem] w-full text-[1.8rem] text-white font-bold px-[2.6rem] py-[1rem] rounded-full bg-lightBlue hover:bg-dark disabled:text-textMeta disabled:bg-grayButton'
      >
        {loadingParams ? (
          <img className='w-[3rem] h-[3rem] px-[auto] inline-block' src={loadingIcon} alt='' />
        ) : (
          'Search'
        )}
      </button>
      <button
        ref={buttonFixRef}
        disabled={_.isEmpty(dirtyFields)}
        type='submit'
        className='z-[100] mt-[1rem] w-screen text-[1.8rem] text-white font-bold px-[2.6rem] py-[1rem] bg-lightBlue hover:bg-dark disabled:text-textMeta disabled:bg-grayButton fixed left-0 bottom-0 disabled:hidden hidden'
      >
        {loadingParams ? (
          <img className='w-[3rem] h-[3rem] px-[auto] inline-block' src={loadingIcon} alt='' />
        ) : (
          'Search'
        )}
      </button>
    </form>
  )
}

export default SideBar
