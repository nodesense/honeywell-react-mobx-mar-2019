REAL DOM - what we see in the browser 
            Mutation
                Create/remove elements
                set text
                add/remove properties

V.DOM    - v.dom 
            Immutable
                Create

Component
        - Small/Logical/Reusable UI/View/
        - TS/JS code
        - TSX/JSX

        Class
            -- react create instance for class component
            -- react calls instance render()
            -- state
            -- Ref - access to real dom
            -- life cycle methods
        Functional Component
            -- react calls the function
            -- no state
            -- react 18.7, state-hook

react-dom /index.js 

    real dom sync - take v.dom as input, sync with real .dom
                    events/event queue/dispatch