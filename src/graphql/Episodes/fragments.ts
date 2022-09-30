import { gql } from "@apollo/client";

export const episodeFragment = gql`
fragment episodeInfo on Episode {
    id
    name
    episode 
    air_date
}
` 

export const pageInfo = gql`
fragment pageInfo on Info {
    next
}
`