// THIS IS ALL EXAMPLE CODE TAKEN FROM DIGI-PETS APP
// DO NOT FORGET TO REMOVE

import { createSlice } from '@reduxjs/toolkit';

// const initialState = getInitialState();
const initialState = {
  petIndexList: [],
  petDirectionList: [],
  petColorList: [],
  petNameList: [],
  petIDList: [],
};

const petSlice = createSlice({
  name: 'pets',
  initialState: initialState,
  reducers: {
    RESET_STATE: (state, action) => {
      state.petIndexList = [];
      state.petDirectionList = [];
      state.petColorList = [];
      state.petNameList = [];
      state.petIDList = [];
    },
    PET_MOVE: (state, action) => {
      const copy = [...state.petIndexList];
      for (let i = 0; i < state.petIndexList.length; i++) {
        if (state.petDirectionList[i] === 'N') {
          copy[i][1] -= 10;
        }
        if (state.petDirectionList[i] === 'NE') {
          copy[i][0] += 10;
          copy[i][1] -= 10;
        }
        if (state.petDirectionList[i] === 'E') {
          copy[i][0] += 10;
        }
        if (state.petDirectionList[i] === 'SE') {
          copy[i][0] += 10;
          copy[i][1] += 10;
        }
        if (state.petDirectionList[i] === 'S') {
          copy[i][1] += 10;
        }
        if (state.petDirectionList[i] === 'SW') {
          copy[i][0] -= 10;
          copy[i][1] += 10;
        }
        if (state.petDirectionList[i] === 'W') {
          copy[i][0] -= 10;
        }
        if (state.petDirectionList[i] === 'NW') {
          copy[i][0] -= 10;
          copy[i][1] -= 10;
        }
      }

      state.petIndexList = copy;
    },
    CHANGE_DIRECTION: (state, action) => {
      console.log('changing direction');
      const index = action.payload;
      const copy = [...state.petDirectionList];
      let directionArray = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
      //max right
      if (state.petIndexList[index][0] > 1000) {
        //bottom right corner
        if (state.petIndexList[index][1] > 650) {
          directionArray = ['N', 'NW', 'W'];
          //top right corner
        } else if (state.petIndexList[index][1] < 150) {
          directionArray = ['W', 'S', 'SW'];
          //right
        } else {
          directionArray = ['N', 'S', 'SW', 'W', 'NW'];
        }
      }
      //max left
      if (state.petIndexList[index][0] < 150) {
        //bottom left
        if (state.petIndexList[index][1] > 650) {
          directionArray = ['N', 'NE', 'E'];
          //top left
        } else if (state.petIndexList[index][1] < 150) {
          directionArray = ['E', 'S', 'SE'];
          //left edge
        } else {
          directionArray = ['N', 'NE', 'E', 'SE', 'S'];
        }
      }
      //top
      if (state.petIndexList[index][1] < 150) {
        directionArray = ['E', 'SE', 'S', 'SW', 'W'];
      }

      if (state.petIndexList[index][1] > 650) {
        directionArray = ['E', 'NE', 'N', 'NW', 'W'];
      }
      copy[index] =
        directionArray[Math.floor(Math.random() * directionArray.length)];
      state.petDirectionList = copy;
    },
    CHOOSE_NEW_PET: (state, action) => {
      const directionArray = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
      const colorChoice = action.payload[0];
      const name = action.payload[1];
      const colorListCopy = [...state.petColorList];
      colorListCopy.push(colorChoice);
      const petIndexListCopy = [...state.petIndexList];
      petIndexListCopy.push([150, 150]);
      const directionListCopy = [...state.petDirectionList];
      directionListCopy.push(
        directionArray[Math.floor(Math.random() * directionArray.length)]
      );
      const namesListCopy = [...state.petNameList];
      namesListCopy.push(name);
      state.petColorList = colorListCopy;
      state.petIndexList = petIndexListCopy;
      state.petDirectionList = directionListCopy;
      state.petNameList = namesListCopy;
    },
    POPULATE_SCREEN: (state, action) => {
      const result = action.payload;
      console.log(action.payload);
      const directionArray = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

      let copyPetIndexList = state.petIndexList;
      let copyPetDirectionList = state.petDirectionList;
      let copyPetColorList = state.petColorList;
      let copyPetNameList = state.petNameList;
      let copyPetIDList = state.petIDList;

      for (let pet of result) {
        copyPetIndexList.push([150, 150]);
        copyPetDirectionList.push(
          directionArray[Math.floor(Math.random() * directionArray.length)]
        );
        copyPetColorList.push(pet.picture);
        copyPetNameList.push(pet.name);
        copyPetIDList.push(pet.id);
      }
      state.petIndexList = copyPetIndexList;
      state.petDirectionList = copyPetDirectionList;
      state.petColorList = copyPetColorList;
      state.petNameList = copyPetNameList;
      state.petIDList = copyPetIDList;
    },
  },
});

export const {
  PET_MOVE,
  CHANGE_DIRECTION,
  CHOOSE_NEW_PET,
  POPULATE_SCREEN,
  RESET_STATE,
} = petSlice.actions;
export default petSlice.reducer;
