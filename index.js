const yargs = require('yargs');
const { addTask, removeTask, updateTask, listAllTasks, detailTask } = require('./task');

yargs.command({
    command: 'add',
    builder: {
        title: {
            type: 'string',
            demandOption: true,
        },
        desc: {
            type: 'string',
            demandOption: true,
        },
    },
    handler: (args) => {
        addTask(args.title, args.desc);
    },
});

yargs.command({
    command: 'remove',
    builder: {
        title: {
            type: 'string',
            demandOption: true,
        },
    },
    handler: (args) => {
        removeTask(args.title);
    },
});


yargs.command({
    command: 'update',
    builder: {
        title: {
            type: 'string',
            demandOption: true,
        },
        desc: {
            type: 'string',
            demandOption: true,
        },
    },
    handler: (args) => {
        updateTask(args.title, args.desc);
    },
});


yargs.command({
    command: 'list',
    builder: {},
    handler: () => {
        listAllTasks();
    },
});


yargs.command({
    command: 'detail',
    builder: {
        title: {
            type: 'string',
            demandOption: true,
        },
    },
    handler: (args) => {
        detailTask(args.title);
    },
});

yargs.parse();
//node index.js add --title="task1" --desc="learning-nodejs"