/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */

import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import PrimaryToolTip from 'components/HtmlToolTips/PrimaryToolTip.js'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'
import { useParams } from 'react-router-dom'
import { getKeyWord } from '../../../apis/movieDetailApi.js'
import { setKeyWord } from '../../../app/redux/slices/movieSlice.js'
import { LineChart } from '../../components/MovieDetailComponents/LineChart/LineChart.jsx'

const SideBar = () => {
  const { movieId } = useParams()
  const dataMovie = useSelector((state) => state.movie.value)
  const keywords = useSelector((state) => state.movie.keyword)
  const dispatch = useDispatch()
  useEffect(() => {
    const getData = async () => {
      const result = await getKeyWord(movieId)
      dispatch(setKeyWord(result.data.keywords))
    }
    getData()
  }, [movieId, dispatch])
  if (_.isEmpty(dataMovie)) return null
  const { original_title, status, budget, spoken_languages, revenue } = dataMovie
  const spoken_language = spoken_languages ? spoken_languages[0]?.name : ''
  const score = Math.ceil(dataMovie.vote_average * 10)
  const bg_score = score > 80 ? 'bg-green-500' : score > 50 ? 'bg-orange-500' : 'bg-red-500'
  return (
    <div className='grey_column ml-[30px] mt-[30px]'>
      <div>
        <section className='split_column season'>
          <div>
            <div className='column no_bottom_pad'>
              <section className='facts left_column mb-[20px]'>
                <div className='flex social_links items-center gap-x-6 mb-[20px] text-[30px]'>
                  <PrimaryToolTip title='Visit Facebook' placement='top'>
                    <div className='cursor-pointer'>
                      <i className='fa-brands fa-facebook' />
                    </div>
                  </PrimaryToolTip>
                  <PrimaryToolTip title='Visit Twitter' placement='top'>
                    <div className='cursor-pointer'>
                      <i className='fa-brands fa-twitter' />
                    </div>
                  </PrimaryToolTip>
                  <PrimaryToolTip title='Visit Twitter' placement='top'>
                    <div className='cursor-pointer'>
                      <a href='404page'>
                        <i className='fa-brands fa-instagram' />
                        <span className='glyphicons_v2 instagram' />
                      </a>
                    </div>
                  </PrimaryToolTip>
                  <PrimaryToolTip title='Visit Instagram' placement='top'>
                    <div className='flex items-center'>
                      <a href='404page' className='font-[50] h-[30px] w-[1px] bg-black'>
                        {' '}
                      </a>
                    </div>
                  </PrimaryToolTip>
                  <PrimaryToolTip title='Visit Link' placement='top'>
                    <div className='cursor-pointer'>
                      <a href='404page'>
                        <i className='text-[25px] fa-solid fa-link' />
                        <span className='glyphicons_v2 Link' />
                      </a>
                    </div>
                  </PrimaryToolTip>

                  <div className='homepage'>
                    <a
                      className='social_link'
                      title='Visit Homepage'
                      href='https://shingeki.tv/'
                      target='_blank'
                      rel='noopener noreferrer'
                      data-role='tooltip'
                    >
                      <span className='glyphicons_v2 link' />
                    </a>
                  </div>
                </div>
                <p className='wrap mb-[20px]'>
                  <strong className='block font-semibold'>Original Title</strong>
                  {original_title}
                </p>
                <p className='mb-[20px]'>
                  <strong className='block font-semibold'>
                    <bdi>Status</bdi>
                  </strong>
                  {status}
                </p>
                <p>
                  <strong className='block font-semibold'>
                    <bdi>Original Language</bdi>
                  </strong>{' '}
                  {spoken_language}
                </p>
                <p>
                  <strong className='block font-semibold'>
                    <bdi>Budget</bdi>
                  </strong>{' '}
                  {budget.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                </p>
                <p>
                  <strong className='block font-semibold'>
                    <bdi>Revenue</bdi>
                  </strong>{' '}
                  {revenue.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                </p>
              </section>

              <section className='keywords right_column mb-[30px]'>
                <h4 className='mb-[10px]'>
                  <bdi className='font-semibold'>Keywords</bdi>
                </h4>
                <ul className='flex flex-wrap pb-[30px] border-b border-graySoft'>
                  {keywords &&
                    keywords.slice(0, 10).map((item) => (
                      <li
                        key={uuidv4()}
                        className='px-[10px] py-[4px] bg-[#0000001a] border border-[#d7d7d7] mr-[5px] mb-[10px] rounded-md'
                      >
                        <a className='rounded' href='/keyword/6078-politics/tv?language=vi'>
                          {item?.name}
                        </a>
                      </li>
                    ))}
                </ul>
              </section>
            </div>
          </div>

          <div>
            <div className='column right_column'>
              <section className='content_score mb-[30px]'>
                <h4 className='mb-10 font-semibold' dir='auto'>
                  Content Score
                </h4>
                <div className='content_score w[260px] h-[38px] overflow-hidden rounded-xl bg-grayBold'>
                  <div
                    style={{ width: `${score}%` }}
                    className={`true flex items-center px-[12px] w-[94%] h-full ${bg_score}`}
                  >
                    <p className='text-white'>{score}</p>
                  </div>
                </div>
                <p>Almost there...</p>
              </section>

              <section className='leaderboard mb-[30px]'>
                <h4 className='mb-[10px]'>Top Contributors</h4>

                <div className='flex flex-col leaders'>
                  {new Array(4).fill(9).map(() => (
                    <div key={uuidv4()} className='edit_leader flex mb-[20px]'>
                      <div className='avatar'>
                        <a href='/u/Sheigutn?language=vi'>
                          <img
                            loading='lazy'
                            className='rounded-full avatar'
                            src='https://www.themoviedb.org/t/p/w90_and_h90_face/5BvxGhRE7yjtbHCXgrTxPk9hBXp.jpg'
                            srcSet='https://www.themoviedb.org/t/p/w45_and_h45_face/5BvxGhRE7yjtbHCXgrTxPk9hBXp.jpg'
                            alt='Sheigutn'
                          />
                        </a>
                      </div>
                      <div className='info pl-[10px]'>
                        <p className='font-bold edit_count'>
                          802
                          <br />
                          <a className='font-[300]' href='/u/Sheigutn?language=vi'>
                            Sheigutn
                          </a>
                        </p>
                      </div>
                    </div>
                  ))}
                  <p>
                    <a className='hover:text-textMeta' href='/tv/1429/changes?language=vi'>
                      <span className='glyphicons glyphicons-chevron-right x1' /> View Edit History
                    </a>
                  </p>
                </div>
              </section>
              <section className='popularity_trend'>
                <h4 className='font-semibold text-[1.1em]' dir='auto'>
                  Popularity Trend
                </h4>
                <div id='popularity_waypoint' className='popularity'>
                  <div id='popularity_chart' data-role='sparkline' className=' k-sparkline'>
                    <LineChart />
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div>
            <p className='inline-block text-white prounded new_button mt-10 bg-primary py-[6px] px-[20px] rounded-[100px]'>
              <a className='font-bold text-[1.1em]' href='/tv/1429/edit?language=vi'>
                Edit Page
              </a>
            </p>
          </div>

          <div className='keyboard_shortcut_text mt-[30px]'>
            <p>
              <a
                id='keyboard_shortcuts'
                className='flex gap-x-2 items-center hover:text-[#00000080] no_click text-textMeta text-[1em]'
                href='#404page'
              >
                <i className='fa-solid fa-keyboard' />
                <span className='glyphicons_v2 keyboard text-[1em]' /> Keyboard Shortcuts
              </a>
            </p>
          </div>
          <div className='report_issue mt-[20px] pb-10'>
            <p className='report_issue'>
              <a
                className='flex hover:text-[#00000080] gap-x-2 hover:text-grayBold items-center no_click report text-[1em] text-textMeta'
                href='404page'
              >
                <i className='fa-solid fa-circle-exclamation' />
                <span className='glyphicons_v2 speech-bubble-alert text-[1em]' /> Report an Issue
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default SideBar
