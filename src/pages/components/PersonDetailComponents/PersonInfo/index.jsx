import { memo, useEffect, useState } from 'react'
import KeyboardIcon from '@mui/icons-material/Keyboard'
import AnnouncementIcon from '@mui/icons-material/Announcement'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import Button from 'components/Button'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import { ICON_STYLES } from 'constants/muiStylesIcon-Ava'
import { PrimaryToolTip } from 'components/HtmlToolTips'
import personAPI from 'apis/personDetailApi'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import { calculateAge } from 'utils/calculateAge'
import { InfoSkeleton } from 'utils/wrapSkeleton'

const PersonInfo = ({ personData }) => {
  const [social, setSocial] = useState({})
  useEffect(() => {
    if (!_.isNil(personData.id)) {
      const getSocial = async () => {
        try {
          const response = await personAPI.getSocialLink(personData.id)
          setSocial(response.data)
        } catch (err) {
          throw new Error(err)
        }
      }
      getSocial()
    }
  }, [personData.id])
  const infoData = [
    { name: 'Known For', value: personData.known_for_department },
    { name: 'Known Credits', value: '7' },
    { name: 'Gender', value: personData.gender === 2 ? 'Male' : 'Female' },
    { name: 'Birthday', value: `${personData.birthday} (${calculateAge(personData.birthday)} years old)` },
    { name: 'Place of Birth', value: personData.place_of_birth },
    { name: 'Also Known As', value: '' },
  ]
  return (
    <div>
      {!_.isEmpty(personData) ? (
        <div className='w-[30rem] min-w-[30rem] md:w-full'>
          <section className='md:flex md:flex-col md:items-center'>
            <div>
              {!_.isNil(personData.profile_path) ? (
                <img
                  className='rounded-[.8rem] w-[30rem] h-[45rem] md:w-[40vw] md:h-[40vw] md:object-cover md:object-top'
                  src={`https://image.tmdb.org/t/p/original${personData.profile_path}`}
                  alt='person-img'
                />
              ) : (
                <div className='w-[30rem] h-[45rem] md:w-[40vw] md:h-[40vw] bg-gray rounded-[.8rem] bg-fallBackImg bg-center bg-no-repeat' />
              )}
            </div>
            <h2 className='font-bold text-[3.52rem] capitalize hidden md:block'>
              <Link to={`/person/${personData.id}`}>{personData.name}</Link>
            </h2>
          </section>
          <section className='mt-[3rem] md:mt-0'>
            <div className='mb-[3rem] flex md:justify-center'>
              {!_.isNil(social.facebook_id) && (
                <PrimaryToolTip title='Visit Facebook' placement='top'>
                  <div className='mr-[1.4rem]'>
                    <Link
                      to={`https://www.facebook.com/${social.facebook_id}`}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FacebookIcon sx={ICON_STYLES.socialMedia} />
                    </Link>
                  </div>
                </PrimaryToolTip>
              )}
              {!_.isNil(social.twitter_id) && (
                <PrimaryToolTip title='Visit Twitter' placement='top'>
                  <div className='mr-[1.4rem]'>
                    <Link to={`https://twitter.com/${social.twitter_id}`} target='_blank' rel='noopener noreferrer'>
                      <TwitterIcon sx={ICON_STYLES.socialMedia} />
                    </Link>
                  </div>
                </PrimaryToolTip>
              )}
              {!_.isNil(social.instagram_id) && (
                <PrimaryToolTip title='Visit Instagram' placement='top'>
                  <div className='mr-[1.4rem]'>
                    <Link
                      to={`https://www.instagram.com/${social.instagram_id}`}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <InstagramIcon sx={ICON_STYLES.socialMedia} />
                    </Link>
                  </div>
                </PrimaryToolTip>
              )}
            </div>
            <div>
              <h3 className='text-[2.1rem] font-semiBold mb-[0.8rem]'>Personal Info</h3>
              {infoData.map((item) => (
                <p className='mb-[1.8rem] leading-[2.5rem]' key={uuidv4()}>
                  <strong className='block leading-[2rem] font-semiBold'>{item.name}</strong>
                  {item.value}
                </p>
              ))}
              <ul className='mt-[-1.5rem]'>
                {personData?.also_known_as?.map((name) => (
                  <li className='leading-[2rem] mt-[.8rem]' key={uuidv4()}>
                    {name}
                  </li>
                ))}
              </ul>
              <Button className='bg-info hover:bg-black hover:text-white duration-150 md:hidden mt-[3rem] text-[1.6rem] px-[2.2rem] py-[.5rem]'>
                {' '}
                EDIT PAGE
              </Button>
              <div className='mt-[3rem] md:hidden'>
                <KeyboardIcon sx={ICON_STYLES.personInfoIcon} />
                <span className='text-textMeta hover:text-secondary cursor-pointer'>Keyboard Shortcuts</span>
              </div>
              <div className='mt-[2rem] md:hidden'>
                <AnnouncementIcon sx={ICON_STYLES.personInfoIcon} />
                <span className='text-textMeta hover:text-secondary cursor-pointer'>Report an Issue</span>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <InfoSkeleton />
      )}
    </div>
  )
}
PersonInfo.propTypes = {
  personData: PropTypes.oneOfType([() => null, PropTypes.object]),
}
PersonInfo.defaultProps = {
  personData: {},
}
export default memo(PersonInfo)
