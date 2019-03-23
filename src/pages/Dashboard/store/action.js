const action = {
    showToastFunc(show) {
        return {
            type: 'IF_SHOW_DIALOGUE',
            show
        }
    }
}

export default action;
