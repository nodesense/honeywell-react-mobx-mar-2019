FavoriteList - Manages all the favorite product - comp
    Add/
    Remove
    Empty
    
FavoriteItem - comp

FavoriteItem { -- models
    id
    name
}

App.tsx {
    import FavoriteList

    render () {
        ....
        <FavoriteList />
    }
}
