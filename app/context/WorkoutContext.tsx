import { createContext, useReducer } from "react";

export const WorkoutContext = createContext({});

export const workoutReducer = (state : any, action : any) => {

    switch (action.type) {
        case "addWorkout":
            return { workouts: [...state.workouts, action.payload]};
        case "deleteWorkout":
            return { workouts: state.workouts.filter((workout: any) => workout.id !== action.payload)};
        default:
            return state;
    }

}