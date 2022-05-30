import { gql } from "@apollo/client"

export const GETDATA = gql`
    query {
        dashboard {
            scenarios {
                    completed, active,inactive
            }, 
            dialogs {
                    active,inactive,completed,
            }
            lists {
                    active, inactive,completed
            }
        }   
    }
`