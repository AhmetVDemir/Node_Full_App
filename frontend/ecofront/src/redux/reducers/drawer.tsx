
export const drawerReducer = (state = { drawer: false }, action: any) => {
    switch (action.type) {
        case "DRAWER":
            return {
                drawer : action.payload
            }
        default:
            return state;
    }
}