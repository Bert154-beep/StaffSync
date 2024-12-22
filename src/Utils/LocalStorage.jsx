const admin = [
    {
        'id': '1',
        'email': 'admin@me.com',
        'password': '456',
        'name': 'Masab Ahmed'
    }
]

const employees = [
    {
        id: '1',
        email: 'employee1@gmail.com',
        name: 'Masab',
        password: '879',
        tasks: [
            {
                id: '1',
                taskTitle: 'Prepare monthly report',
                taskDescription: 'Compile data from all departments and prepare the monthly report.',
                taskDate: '2024-12-18',
                category: 'Reporting',
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                id: '2',
                taskTitle: 'Update project documentation',
                taskDescription: 'Review and update the documentation for the ongoing project.',
                taskDate: '2024-12-20',
                category: 'Documentation',
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                id: '3',
                taskTitle: 'Fix critical bug in production',
                taskDescription: 'Resolve the bug causing performance issues on the client side.',
                taskDate: '2024-12-15',
                category: 'Development',
                active: true,
                newTask: false,
                completed: false,
                failed: true
            }
        ],
        taskCounts: {
            newTasks: 0,
            failedTasks: 1,
            completedTasks: 1,
            pendingTasks: 1
        }
    },
    {
        id: '2',
        email: 'employee2@gmail.com',
        name: 'Ahmed',
        password: '879',
        tasks: [
            {
                id: '4',
                taskTitle: 'Client communication for feedback',
                taskDescription: 'Reach out to clients and gather their feedback on our services.',
                taskDate: '2024-12-20',
                category: 'Client Relations',
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                id: '5',
                taskTitle: 'Deploy new feature',
                taskDescription: 'Deploy the latest feature update to production servers.',
                taskDate: '2024-12-18',
                category: 'Development',
                active: false,
                newTask: false,
                completed: false,
                failed: true
            },
            {
                id: '6',
                taskTitle: 'Optimize database queries',
                taskDescription: 'Analyze and optimize slow queries in the database.',
                taskDate: '2024-12-16',
                category: 'Database Management',
                active: true,
                newTask: false,
                completed: true,
                failed: false
            }
        ],
        taskCounts: {
            newTasks: 1,
            failedTasks: 1,
            completedTasks: 1,
            pendingTasks: 1
        }
    },
    {
        id: '3',
        email: 'employee3@gmail.com',
        name: 'Abdullah',
        password: '879',
        tasks: [
            {
                id: '7',
                taskTitle: 'Organize team building event',
                taskDescription: 'Plan and organize a team building event for the company.',
                taskDate: '2024-12-25',
                category: 'Event Management',
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                id: '8',
                taskTitle: 'Write technical blog post',
                taskDescription: 'Draft a technical blog post about recent technology updates.',
                taskDate: '2024-12-23',
                category: 'Content Creation',
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                id: '9',
                taskTitle: 'Conduct system performance testing',
                taskDescription: 'Run performance tests on the production system and report results.',
                taskDate: '2024-12-18',
                category: 'Testing',
                active: true,
                newTask: true,
                completed: false,
                failed: false
            }
        ],
        taskCounts: {
            newTasks: 2,
            failedTasks: 0,
            completedTasks: 1,
            pendingTasks: 2
        }
    },
    {
        id: '4',
        email: 'employee4@gmail.com',
        name: 'Ayan',
        password: '879',
        tasks: [
            {
                id: '10',
                taskTitle: 'Prepare quarterly budget',
                taskDescription: 'Analyze expenses and prepare the budget for the next quarter.',
                taskDate: '2024-12-30',
                category: 'Finance',
                active: false,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                id: '11',
                taskTitle: 'Onboard new employee',
                taskDescription: 'Assist with the onboarding process for the new hire.',
                taskDate: '2024-12-19',
                category: 'HR',
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                id: '12',
                taskTitle: 'Improve customer support flow',
                taskDescription: 'Redesign the customer support workflow for better efficiency.',
                taskDate: '2024-12-24',
                category: 'Customer Support',
                active: false,
                newTask: false,
                completed: true,
                failed: false
            }
        ],
        taskCounts: {
            newTasks: 1,
            failedTasks: 0,
            completedTasks: 1,
            pendingTasks: 1
        }
    }
];


export const setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
    JSON.parse(localStorage.getItem(employees))
    JSON.parse(localStorage.getItem(admin))

    return {employees,admin}
}


