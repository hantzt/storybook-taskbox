import React from "react";

import Task from "./Task";

export default {
  component: Task,
  title: "Task",
};

const Template = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: "TASK_PINNED",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
};

const longString =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at nibh vel lacus interdum porttitor nec quis massa. Aenean finibus enim luctus nunc venenatis euismod. Vestibulum consectetur lobortis lobortis. Integer vulputate non eros id lobortis. Sed vel risus mollis, feugiat velit eu, tincidunt felis. Morbi ultrices porta odio et auctor.";
export const LongTitle = Template.bind({});
LongTitle.args = {
  task: {
    ...Default.args.task,
    title: longString,
  },
};
