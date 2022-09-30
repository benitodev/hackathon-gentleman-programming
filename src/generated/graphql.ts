import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Character = {
  __typename?: 'Character';
  /** Time at which the character was created in the database. */
  created?: Maybe<Scalars['String']>;
  /** Episodes in which this character appeared. */
  episode: Array<Maybe<Episode>>;
  /** The gender of the character ('Female', 'Male', 'Genderless' or 'unknown'). */
  gender?: Maybe<Scalars['String']>;
  /** The id of the character. */
  id?: Maybe<Scalars['ID']>;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image?: Maybe<Scalars['String']>;
  /** The character's last known location */
  location?: Maybe<Location>;
  /** The name of the character. */
  name?: Maybe<Scalars['String']>;
  /** The character's origin location */
  origin?: Maybe<Location>;
  /** The species of the character. */
  species?: Maybe<Scalars['String']>;
  /** The status of the character ('Alive', 'Dead' or 'unknown'). */
  status?: Maybe<Scalars['String']>;
  /** The type or subspecies of the character. */
  type?: Maybe<Scalars['String']>;
};

export type Characters = {
  __typename?: 'Characters';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Character>>>;
};

export type Episode = {
  __typename?: 'Episode';
  /** The air date of the episode. */
  air_date?: Maybe<Scalars['String']>;
  /** List of characters who have been seen in the episode. */
  characters: Array<Maybe<Character>>;
  /** Time at which the episode was created in the database. */
  created?: Maybe<Scalars['String']>;
  /** The code of the episode. */
  episode?: Maybe<Scalars['String']>;
  /** The id of the episode. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the episode. */
  name?: Maybe<Scalars['String']>;
};

export type Episodes = {
  __typename?: 'Episodes';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Episode>>>;
};

export type FilterCharacter = {
  gender?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  species?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type FilterEpisode = {
  episode?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FilterLocation = {
  dimension?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type Info = {
  __typename?: 'Info';
  /** The length of the response. */
  count?: Maybe<Scalars['Int']>;
  /** Number of the next page (if it exists) */
  next?: Maybe<Scalars['Int']>;
  /** The amount of pages. */
  pages?: Maybe<Scalars['Int']>;
  /** Number of the previous page (if it exists) */
  prev?: Maybe<Scalars['Int']>;
};

export type Location = {
  __typename?: 'Location';
  /** Time at which the location was created in the database. */
  created?: Maybe<Scalars['String']>;
  /** The dimension in which the location is located. */
  dimension?: Maybe<Scalars['String']>;
  /** The id of the location. */
  id?: Maybe<Scalars['ID']>;
  /** The name of the location. */
  name?: Maybe<Scalars['String']>;
  /** List of characters who have been last seen in the location. */
  residents: Array<Maybe<Character>>;
  /** The type of the location. */
  type?: Maybe<Scalars['String']>;
};

export type Locations = {
  __typename?: 'Locations';
  info?: Maybe<Info>;
  results?: Maybe<Array<Maybe<Location>>>;
};

export type Query = {
  __typename?: 'Query';
  /** Get a specific character by ID */
  character?: Maybe<Character>;
  /** Get the list of all characters */
  characters?: Maybe<Characters>;
  /** Get a list of characters selected by ids */
  charactersByIds?: Maybe<Array<Maybe<Character>>>;
  /** Get a specific episode by ID */
  episode?: Maybe<Episode>;
  /** Get the list of all episodes */
  episodes?: Maybe<Episodes>;
  /** Get a list of episodes selected by ids */
  episodesByIds?: Maybe<Array<Maybe<Episode>>>;
  /** Get a specific locations by ID */
  location?: Maybe<Location>;
  /** Get the list of all locations */
  locations?: Maybe<Locations>;
  /** Get a list of locations selected by ids */
  locationsByIds?: Maybe<Array<Maybe<Location>>>;
};


export type QueryCharacterArgs = {
  id: Scalars['ID'];
};


export type QueryCharactersArgs = {
  filter?: InputMaybe<FilterCharacter>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryCharactersByIdsArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryEpisodeArgs = {
  id: Scalars['ID'];
};


export type QueryEpisodesArgs = {
  filter?: InputMaybe<FilterEpisode>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryEpisodesByIdsArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryLocationArgs = {
  id: Scalars['ID'];
};


export type QueryLocationsArgs = {
  filter?: InputMaybe<FilterLocation>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryLocationsByIdsArgs = {
  ids: Array<Scalars['ID']>;
};

export type GetActorsQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<FilterCharacter>;
}>;


export type GetActorsQuery = { __typename?: 'Query', characters?: { __typename?: 'Characters', results?: Array<{ __typename?: 'Character', id?: string | null | undefined, name?: string | null | undefined, species?: string | null | undefined, image?: string | null | undefined, created?: string | null | undefined, origin?: { __typename?: 'Location', type?: string | null | undefined, name?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined, info?: { __typename?: 'Info', next?: number | null | undefined } | null | undefined } | null | undefined };

export type GetEpisodesThatAppearActorQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetEpisodesThatAppearActorQuery = { __typename?: 'Query', character?: { __typename?: 'Character', episode: Array<{ __typename?: 'Episode', id?: string | null | undefined, name?: string | null | undefined, episode?: string | null | undefined, air_date?: string | null | undefined } | null | undefined> } | null | undefined };

export type EpisodeInfoFragment = { __typename?: 'Episode', id?: string | null | undefined, name?: string | null | undefined, episode?: string | null | undefined, air_date?: string | null | undefined };

export type PageInfoFragment = { __typename?: 'Info', next?: number | null | undefined };

export type GetEpisodesQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<FilterEpisode>;
}>;


export type GetEpisodesQuery = { __typename?: 'Query', episodes?: { __typename?: 'Episodes', results?: Array<{ __typename?: 'Episode', id?: string | null | undefined, name?: string | null | undefined, episode?: string | null | undefined, air_date?: string | null | undefined } | null | undefined> | null | undefined, info?: { __typename?: 'Info', next?: number | null | undefined } | null | undefined } | null | undefined };

export type GetCharactersFromEpisodeQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetCharactersFromEpisodeQuery = { __typename?: 'Query', episode?: { __typename?: 'Episode', id?: string | null | undefined, name?: string | null | undefined, episode?: string | null | undefined, characters: Array<{ __typename?: 'Character', id?: string | null | undefined, name?: string | null | undefined, species?: string | null | undefined, gender?: string | null | undefined, image?: string | null | undefined } | null | undefined> } | null | undefined };

export type GetSeasonsAndEpisodesQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
}>;


export type GetSeasonsAndEpisodesQuery = { __typename?: 'Query', episodes?: { __typename?: 'Episodes', results?: Array<{ __typename?: 'Episode', episode?: string | null | undefined } | null | undefined> | null | undefined, info?: { __typename?: 'Info', count?: number | null | undefined, pages?: number | null | undefined, next?: number | null | undefined } | null | undefined } | null | undefined };

export const EpisodeInfoFragmentDoc = gql`
    fragment episodeInfo on Episode {
  id
  name
  episode
  air_date
}
    `;
export const PageInfoFragmentDoc = gql`
    fragment pageInfo on Info {
  next
}
    `;
export const GetActorsDocument = gql`
    query GetActors($page: Int, $filter: FilterCharacter) {
  characters(page: $page, filter: $filter) {
    results {
      id
      name
      species
      image
      created
      origin {
        type
        name
      }
    }
    info {
      next
    }
  }
}
    `;

/**
 * __useGetActorsQuery__
 *
 * To run a query within a React component, call `useGetActorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetActorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetActorsQuery({
 *   variables: {
 *      page: // value for 'page'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetActorsQuery(baseOptions?: Apollo.QueryHookOptions<GetActorsQuery, GetActorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetActorsQuery, GetActorsQueryVariables>(GetActorsDocument, options);
      }
export function useGetActorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetActorsQuery, GetActorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetActorsQuery, GetActorsQueryVariables>(GetActorsDocument, options);
        }
export type GetActorsQueryHookResult = ReturnType<typeof useGetActorsQuery>;
export type GetActorsLazyQueryHookResult = ReturnType<typeof useGetActorsLazyQuery>;
export type GetActorsQueryResult = Apollo.QueryResult<GetActorsQuery, GetActorsQueryVariables>;
export const GetEpisodesThatAppearActorDocument = gql`
    query GetEpisodesThatAppearActor($id: ID!) {
  character(id: $id) {
    episode {
      id
      name
      episode
      air_date
    }
  }
}
    `;

/**
 * __useGetEpisodesThatAppearActorQuery__
 *
 * To run a query within a React component, call `useGetEpisodesThatAppearActorQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEpisodesThatAppearActorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEpisodesThatAppearActorQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetEpisodesThatAppearActorQuery(baseOptions: Apollo.QueryHookOptions<GetEpisodesThatAppearActorQuery, GetEpisodesThatAppearActorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEpisodesThatAppearActorQuery, GetEpisodesThatAppearActorQueryVariables>(GetEpisodesThatAppearActorDocument, options);
      }
export function useGetEpisodesThatAppearActorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEpisodesThatAppearActorQuery, GetEpisodesThatAppearActorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEpisodesThatAppearActorQuery, GetEpisodesThatAppearActorQueryVariables>(GetEpisodesThatAppearActorDocument, options);
        }
export type GetEpisodesThatAppearActorQueryHookResult = ReturnType<typeof useGetEpisodesThatAppearActorQuery>;
export type GetEpisodesThatAppearActorLazyQueryHookResult = ReturnType<typeof useGetEpisodesThatAppearActorLazyQuery>;
export type GetEpisodesThatAppearActorQueryResult = Apollo.QueryResult<GetEpisodesThatAppearActorQuery, GetEpisodesThatAppearActorQueryVariables>;
export const GetEpisodesDocument = gql`
    query GetEpisodes($page: Int, $filter: FilterEpisode) {
  episodes(page: $page, filter: $filter) {
    results {
      id
      name
      episode
      air_date
    }
    info {
      next
    }
  }
}
    `;

/**
 * __useGetEpisodesQuery__
 *
 * To run a query within a React component, call `useGetEpisodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEpisodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEpisodesQuery({
 *   variables: {
 *      page: // value for 'page'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetEpisodesQuery(baseOptions?: Apollo.QueryHookOptions<GetEpisodesQuery, GetEpisodesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEpisodesQuery, GetEpisodesQueryVariables>(GetEpisodesDocument, options);
      }
export function useGetEpisodesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEpisodesQuery, GetEpisodesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEpisodesQuery, GetEpisodesQueryVariables>(GetEpisodesDocument, options);
        }
export type GetEpisodesQueryHookResult = ReturnType<typeof useGetEpisodesQuery>;
export type GetEpisodesLazyQueryHookResult = ReturnType<typeof useGetEpisodesLazyQuery>;
export type GetEpisodesQueryResult = Apollo.QueryResult<GetEpisodesQuery, GetEpisodesQueryVariables>;
export const GetCharactersFromEpisodeDocument = gql`
    query GetCharactersFromEpisode($id: ID!) {
  episode(id: $id) {
    id
    name
    episode
    characters {
      id
      name
      species
      gender
      image
    }
  }
}
    `;

/**
 * __useGetCharactersFromEpisodeQuery__
 *
 * To run a query within a React component, call `useGetCharactersFromEpisodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharactersFromEpisodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharactersFromEpisodeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCharactersFromEpisodeQuery(baseOptions: Apollo.QueryHookOptions<GetCharactersFromEpisodeQuery, GetCharactersFromEpisodeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCharactersFromEpisodeQuery, GetCharactersFromEpisodeQueryVariables>(GetCharactersFromEpisodeDocument, options);
      }
export function useGetCharactersFromEpisodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCharactersFromEpisodeQuery, GetCharactersFromEpisodeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCharactersFromEpisodeQuery, GetCharactersFromEpisodeQueryVariables>(GetCharactersFromEpisodeDocument, options);
        }
export type GetCharactersFromEpisodeQueryHookResult = ReturnType<typeof useGetCharactersFromEpisodeQuery>;
export type GetCharactersFromEpisodeLazyQueryHookResult = ReturnType<typeof useGetCharactersFromEpisodeLazyQuery>;
export type GetCharactersFromEpisodeQueryResult = Apollo.QueryResult<GetCharactersFromEpisodeQuery, GetCharactersFromEpisodeQueryVariables>;
export const GetSeasonsAndEpisodesDocument = gql`
    query GetSeasonsAndEpisodes($page: Int) {
  episodes(page: $page) {
    results {
      episode
    }
    info {
      count
      pages
      next
    }
  }
}
    `;

/**
 * __useGetSeasonsAndEpisodesQuery__
 *
 * To run a query within a React component, call `useGetSeasonsAndEpisodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSeasonsAndEpisodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSeasonsAndEpisodesQuery({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function useGetSeasonsAndEpisodesQuery(baseOptions?: Apollo.QueryHookOptions<GetSeasonsAndEpisodesQuery, GetSeasonsAndEpisodesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSeasonsAndEpisodesQuery, GetSeasonsAndEpisodesQueryVariables>(GetSeasonsAndEpisodesDocument, options);
      }
export function useGetSeasonsAndEpisodesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSeasonsAndEpisodesQuery, GetSeasonsAndEpisodesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSeasonsAndEpisodesQuery, GetSeasonsAndEpisodesQueryVariables>(GetSeasonsAndEpisodesDocument, options);
        }
export type GetSeasonsAndEpisodesQueryHookResult = ReturnType<typeof useGetSeasonsAndEpisodesQuery>;
export type GetSeasonsAndEpisodesLazyQueryHookResult = ReturnType<typeof useGetSeasonsAndEpisodesLazyQuery>;
export type GetSeasonsAndEpisodesQueryResult = Apollo.QueryResult<GetSeasonsAndEpisodesQuery, GetSeasonsAndEpisodesQueryVariables>;