import { useReactiveVar } from "@apollo/client"
import { useEffect, useState } from "react"
import { useGetSeasonsAndEpisodesQuery } from "../../generated/graphql"
import { GET_SEASONS_AND_EPISODES } from "../../graphql/Episodes/queries"
import { filterEpisodesVar } from "../../main"
import { sliceStringsInArray } from "../../types/CommonUtils"
import SelectField, { Options } from "../field/SelectField"

type OptionObject = {
  seasons: { inputLabel: string, options: Options[] }
  episodes: { inputLabel: string, options: Options[] }
}

const INITIAL_STATE: OptionObject = {
  seasons: { inputLabel: 'Seasons', options: [{ label: '', value: '' }] },
  episodes: { inputLabel: 'Episodes', options: [{ label: '', value: '' }] }
}

const SearchSelectField = () => {
  const filterEpisodes = useReactiveVar(filterEpisodesVar)
  const [options, setOptions] = useState<OptionObject>(INITIAL_STATE)
  const { data, loading, fetchMore } = useGetSeasonsAndEpisodesQuery({
    query: GET_SEASONS_AND_EPISODES
  })

  const response = data?.episodes
  const episodesArray = response?.results
  const lenghtConditional = response?.info?.count
  const next = response?.info?.next

  useEffect(() => {
    //Get only all the episodes 
    if (next === null || typeof next !== 'number') return
    fetchMore({
      query: GET_SEASONS_AND_EPISODES,
      variables: {
        page: next
      },
      updateQuery: (pv, { fetchMoreResult }) => {
        if (!fetchMoreResult) return pv
        return {
          __typename: 'Query',
          episodes: {
            __typename: 'Episodes',
            results: [...(pv.episodes?.results as []), ...(fetchMoreResult.episodes?.results as [])],
            info: {
              __typename: 'Info',
              next: fetchMoreResult.episodes?.info?.next,
              pages: fetchMoreResult.episodes?.info?.pages,
              count: pv.episodes?.info?.count
            }
          }
        }
      }

    })
  }, [next])

  const episodesFiltered = episodesArray?.map((obj) => {
    const ep = obj?.episode
    return ep
  }) as string[]

  useEffect(() => {
    if (!lenghtConditional) return
    if (episodesFiltered && episodesFiltered?.length !== lenghtConditional!) return

    const getOnlySeasonsData = sliceStringsInArray(episodesFiltered, [0, 3])
    const removeDuplicateItems = new Set(getOnlySeasonsData)

    const seasonsValues = [...removeDuplicateItems]
    const seasonsLabels = sliceStringsInArray(seasonsValues, [2])

    const seasonsOptions = seasonsLabels.map((str, i) => ({ label: str, value: seasonsValues[i] }))
    setOptions(prev => ({ ...prev, seasons: { inputLabel: 'Seasons', options: seasonsOptions } }))
  }, [data, episodesArray])

  useEffect(() => {
    if (!filterEpisodes) return
    if (episodesFiltered && episodesFiltered?.length !== lenghtConditional!) return

    const getEpisodesFromSeasonVar = episodesFiltered.filter((str) => str.indexOf(filterEpisodes) !== -1)
    const getOnlyEpisodesData = sliceStringsInArray(getEpisodesFromSeasonVar, [3, 6])
    const episodesLabels = sliceStringsInArray(getOnlyEpisodesData, [1])
    const episodesOptions = episodesLabels.map((str, i) => ({ label: str, value: getOnlyEpisodesData[i] }))

    setOptions((prev) => ({ ...prev, episodes: { inputLabel: 'Episodes', options: episodesOptions } }))

    return () => { filterEpisodesVar('') }

  }, [filterEpisodes])

  const optionsValues: OptionObject = {
    seasons: options?.seasons
  } as OptionObject

  return (
    <>
      {
        episodesFiltered && episodesFiltered.length >= lenghtConditional! &&
        <SelectField fields={{ seasons: options?.seasons, episodes: options?.episodes }} />
      }
    </>
  )
}

export default SearchSelectField