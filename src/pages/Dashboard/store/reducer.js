
export const reducer = (state, action) => {
    if (!state) {
        return {
            showDialogue: false
        }
    }
    switch (action.type) {
        case 'IF_SHOW_DIALOGUE':
            state = Object.assign(state, { showDialogue: action.show });
            return {
                ...state
            }
    }
}
