/* eslint-disable max-len */
import CardMovieMedium from 'components/CardMovie/CardMovieMedium'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Button from 'components/Button'
import { getDiscoverMovies } from 'apis/movieListApi'
import _ from 'lodash'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { SET_LOADING_LIST, SET_LOADING_PARAM } from 'app/redux/slices/moviePageSlice'
import style from './MovieList.module.css'
import MovieCardSkeleton from '../MovieCardSkeleton'

const MovieList = () => {
  const [loadMore, setLoadMore] = useState(false)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState()
  const [data, setData] = useState([])
  const { params, loadingList, loadingParams } = useSelector((state) => state.moviePage)
  const observer = useRef()
  const dispatch = useDispatch()

  const lastMovieRef = useCallback(
    (node) => {
      if (loadingList) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && page < totalPages && loadMore) {
            dispatch(SET_LOADING_LIST(true))
            setPage((prevPageNumber) => prevPageNumber + 1)
          }
        },
        {
          rootMargin: '200px',
        },
      )
      if (node) observer.current.observe(node)
    },
    [page, totalPages, loadingList, loadMore, dispatch],
  )

  const handleClickLoadMore = () => {
    if (!loadMore && page < totalPages) {
      setPage((state) => state + 1)
      setLoadMore(true)
    }
  }

  useEffect(() => {
    dispatch(SET_LOADING_LIST(true))
    setPage(1)
    setLoadMore(false)
  }, [params, dispatch])

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getDiscoverMovies({ ...params, page })
        if (page !== 1) setData([...data, ...res.data.results])
        else setData([...res.data.results])
        setTotalPages(res.data.total_pages)
        dispatch(SET_LOADING_LIST(false))
        dispatch(SET_LOADING_PARAM(false))
      } catch {
        toast.error('Something wrong happens!')
        dispatch(SET_LOADING_LIST(false))
        dispatch(SET_LOADING_PARAM(false))
      }
    }

    getData()
  }, [page, params, dispatch])

  if (totalPages === 0) {
    return <p>No items were found that match your query.</p>
  }

  return (
    <div>
      <div className={`${style.list}`}>
        {loadingParams &&
          Array(20)
            .fill(0)
            .map(() => <MovieCardSkeleton key={_.uniqueId()} />)}
        {!_.isEmpty(data) &&
          data.map((item) => (
            <CardMovieMedium
              key={item.id}
              title={item.original_title}
              posterPath={item.poster_path}
              releaseDate={item.release_date}
              id={item.id}
              score={item.vote_average}
              ref={lastMovieRef}
            />
          ))}
        {loadingList &&
          Array(20)
            .fill(0)
            .map(() => <MovieCardSkeleton key={_.uniqueId()} />)}
      </div>
      {page < totalPages && (
        <Button className='w-full mt-[3rem] text-[2.4rem]' isSquare onClick={handleClickLoadMore}>
          Load more
        </Button>
      )}
    </div>
  )
}

export default MovieList
