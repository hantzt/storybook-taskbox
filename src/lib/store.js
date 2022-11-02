/* Simple Redux store/actions/reducer implementation */
import { configureStore, createSlice } from "@reduxjs/toolkit";

/* Initial state of the store */
const defaultTasks = [
    { id: '1', title: 'Something', state: 'TASK_INBOX'},
    { id: '2', title: 'Something more', state: 'TASK_INBOX'},
    { id: '3', title: 'Something else', state: 'TASK_INBOX'},
    { id: '4', title: 'Something again', state: 'TASK_INBOX'},
];

const TaskBoxData = {
    tasks: defaultTasks,
    status: 'idle',
    error: null,
}

/* Store creation */
const TasksSlice = createSlice({
    name: 'taskbox',
    initialState: TaskBoxData,
    reducers: {
        updateTaskState: (state, action) => {
            const {id, newTaskState} = action.payload;
            const task = state.tasks.findIndex((task) => task.id === id)
            if (task >= 0) {
                state.tasks[task].state = newTaskState;
            }
        },
    },
});

export const {updateTaskState} = TasksSlice.actions;

/* App's store configuration */
const store = configureStore({
    reducer: {
        task: TasksSlice.reducer,
    },
});

export default store;

