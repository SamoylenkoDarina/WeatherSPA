export const REQUEST = 'REQUEST';

export const requestMiddleware = store => next => action => {
    if (action.type === REQUEST) {
        fetch(action.payload.url)
            .then((response) => {
                if (response.status === 200) {
                    return response.json()  
                }
                throw new Error('Invalid data')
            })
            .then((response) => {
                const responseAction = action.payload.successAction(response);
                next(responseAction);
            })
            .catch((error) => {console.error(error)})
        return
    }
    next(action)
}