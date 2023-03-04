const init = {
  isOpen: true,
};

const commonReducer = (state = init, action) => {
  switch (action.type) {
    case "setIsOpen":
      return {
        ...state,
        isOpen: action.payload,
      };

    default:
      return state;
  }
};

export default commonReducer;
