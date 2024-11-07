import avatar1 from "../assets/man1.png";

const initialState = {
    contacts: [
        {
            id: 1,
            name: 'Alice Johnson',
            mail: "xyz123@gmail.com",
            phone: '555-1234',
            place: "California",
            avatar: avatar1,
            tags: ["responsive", "email", "project"],
            emailThreads: [
                {
                    id: 1,
                    date: '2024-11-02',
                    subject: 'Project Update Follow-Up',
                    emails: [
                        { id: 1, content: 'Hi Alice, following up on the project update.' },
                        { id: 2, content: 'Thank you for the update. Please let me know the next steps.' }
                    ]
                }
            ],
            notes: [
                { id: 1, content: 'Very responsive, prefers email communication' },
                { id: 2, content: 'Interested in monthly project updates' }
            ]
        },
        {
            id: 2,
            name: 'Bob Smith',
            mail: "xyz333@gmail.com",
            phone: '555-5678',
            place: "London",
            avatar: avatar1,
            tags: ["in-person", "afternoon", "budget"],
            emailThreads: [
                {
                    id: 1,
                    date: '2024-11-03',
                    subject: 'Budget Discussion',
                    emails: [
                        { id: 1, content: 'Hi Bob, here’s the budget proposal.' }
                    ]
                }
            ],
            notes: [
                { id: 1, content: 'Prefers in-person meetings in the afternoons' }
            ]
        },
        {
            id: 3,
            name: 'Sam Curren',
            mail: "a23@gmail.com",
            phone: '555-5676',
            place: "Mumbai",
            avatar: avatar1,
            tags: ["punctual", "organized", "timeline"],
            emailThreads: [
                {
                    id: 1,
                    date: '2024-11-04',
                    subject: 'Timeline Discussion',
                    emails: [
                        { id: 1, content: 'Can we discuss the project timeline?' },
                        { id: 2, content: 'Sure, let’s schedule a call for that.' }
                    ]
                }
            ],
            notes: [
                { id: 1, content: 'Very punctual and organized' }
            ]
        },
        {
            id: 4,
            name: 'Baby John',
            mail: "tgz123@gmail.com",
            phone: '555-5675',
            place: "Rome",
            avatar: avatar1,
            tags: ["payment", "reminder"],
            emailThreads: [],
            notes: [
                { id: 1, content: 'Needs reminders for payments' }
            ]
        },
        {
            id: 5,
            name: 'Lucy Hale',
            mail: "lucy_hale@example.com",
            phone: '555-6789',
            place: "Paris",
            avatar: avatar1,
            tags: ["detailed", "presentation", "project"],
            emailThreads: [
                {
                    id: 1,
                    date: '2024-11-06',
                    subject: 'Initial Project Discussion',
                    emails: [
                        { id: 1, content: 'Hi Lucy, let’s discuss the project in detail.' },
                        { id: 2, content: 'Looking forward to it. Thanks for the agenda.' }
                    ]
                }
            ],
            notes: [
                { id: 1, content: 'Likes detailed presentations' }
            ]
        },
        {
            id: 6,
            name: 'Michael Lee',
            mail: "mike_lee@example.com",
            phone: '555-7890',
            place: "Berlin",
            avatar: avatar1,
            tags: ["decision", "proposal", "follow-up"],
            emailThreads: [
                {
                    id: 1,
                    date: '2024-11-07',
                    subject: 'Proposal Follow-Up',
                    emails: [
                        { id: 1, content: 'Hi Michael, following up on the proposal.' },
                        { id: 2, content: 'I’ll review it and get back to you soon.' }
                    ]
                }
            ],
            notes: [
                { id: 1, content: 'Takes time to make decisions' }
            ]
        },
        {
            id: 7,
            name: 'Olivia Turner',
            mail: "olivia_turner@example.com",
            phone: '555-3456',
            place: "Toronto",
            avatar: avatar1,
            tags: ["concise", "contract", "review"],
            emailThreads: [
                {
                    id: 1,
                    date: '2024-11-08',
                    subject: 'Contract for Review',
                    emails: [
                        { id: 1, content: 'Hi Olivia, please review the contract attached.' }
                    ]
                }
            ],
            notes: [
                { id: 1, content: 'Prefers quick and concise communication' }
            ]
        },
        {
            id: 8,
            name: 'Jake Anderson',
            mail: "jake_anderson@example.com",
            phone: '555-2345',
            place: "Sydney",
            avatar: avatar1,
            tags: ["friendly", "check-in", "deliverables"],
            emailThreads: [
                {
                    id: 1,
                    date: '2024-11-09',
                    subject: 'Progress Check-In',
                    emails: [
                        { id: 1, content: 'Hi Jake, checking on the deliverables' },
                        { id: 2, content: 'All on track, thanks for checking in!' }
                    ]
                }
            ],
            notes: [
                { id: 1, content: 'Friendly and easy-going' }
            ]
        },
        {
            id: 9,
            name: 'Sophia Brown',
            mail: "sophia_brown@example.com",
            phone: '555-1235',
            place: "Tokyo",
            avatar: avatar1,
            tags: ["milestones", "project", "detail"],
            emailThreads: [
                {
                    id: 1,
                    date: '2024-11-10',
                    subject: 'Project Milestones',
                    emails: [
                        { id: 1, content: 'Hi Sophia, let’s discuss the milestones.' },
                        { id: 2, content: 'Sounds good, looking forward to it.' }
                    ]
                }
            ],
            notes: [
                { id: 1, content: 'Attention to detail is exceptional' }
            ]
        },
        {
            id: 10,
            name: 'Chris Evans',
            mail: "chris_evans@example.com",
            phone: '555-6781',
            place: "Dubai",
            avatar: avatar1,
            tags: ["professional", "email", "contract"],
            emailThreads: [
                {
                    id: 1,
                    date: '2024-11-11',
                    subject: 'Contract Details Follow-Up',
                    emails: [
                        { id: 1, content: 'Hi Chris, following up on the contract details.' }
                    ]
                }
            ],
            notes: [
                { id: 1, content: 'Very professional, prefers emails' }
            ]
        },
        // Add 10 more contacts here to reach 20 total
        {
            id: 11,
            name: 'Daniel Carter',
            mail: "daniel_carter@example.com",
            phone: '555-8910',
            place: "Amsterdam",
            avatar: avatar1,
            tags: ["feedback", "draft", "edit"],
            emailThreads: [
                {
                    id: 1,
                    date: '2024-11-12',
                    subject: 'Feedback on Draft',
                    emails: [
                        { id: 1, content: 'Hi Daniel, here’s the draft for your review.' },
                        { id: 2, content: 'Looks good, just a few minor edits needed.' }
                    ]
                }
            ],
            notes: [
                { id: 1, content: 'Provides quick feedback' }
            ]
        },
        {
            id: 12,
            name: 'Ella Thompson',
            mail: "ella_thompson@example.com",
            phone: '555-9123',
            place: "Madrid",
            avatar: avatar1,
            tags: ["in-person", "meeting", "agenda"],
            emailThreads: [
                {
                    id: 1,
                    date: '2024-11-13',
                    subject: 'Meeting Agenda',
                    emails: [
                        { id: 1, content: 'Hi Ella, here’s the agenda for our upcoming meeting.' }
                    ]
                }
            ],
            notes: [
                { id: 1, content: 'Prefers to discuss details in person' }
            ]
        },
        {
            id: 13,
            name: 'Henry Adams',
            mail: "henry_adams@example.com",
            phone: '555-3457',
            place: "Vancouver",
            avatar: avatar1,
            tags: ["technical", "specs", "review"],
            emailThreads: [
                {
                    id: 1,
                    date: '2024-11-14',
                    subject: 'Technical Specs Review',
                    emails: [
                        { id: 1, content: 'Hi Henry, can you review the technical specifications?' },
                        { id: 2, content: 'Sure, I’ll get back to you soon.' }
                    ]
                }
            ],
            notes: [
                { id: 1, content: 'Highly technical, focuses on specs' }
            ]
        },
        {
            id: 14,
            name: 'Ivy Stewart',
            mail: "ivy_stewart@example.com",
            phone: '555-6782',
            place: "Los Angeles",
            avatar: avatar1,
            tags: ["deadline", "project", "completion"],
            emailThreads: [
                {
                    id: 1,
                    date: '2024-11-15',
                    subject: 'Project Deadline Confirmation',
                    emails: [
                        { id: 1, content: 'Hi Ivy, confirming the project deadline.' }
                    ]
                }
            ],
            notes: [
                { id: 1, content: 'Focuses on deadlines' }
            ]
        },
        {
            id: 15,
            name: 'Jackie Foster',
            mail: "jackie_foster@example.com",
            phone: '555-5679',
            place: "New York",
            avatar: avatar1,
            tags: ["design", "aesthetic", "review"],
            emailThreads: [
                {
                    id: 1,
                    date: '2024-11-16',
                    subject: 'Design Aesthetic Feedback',
                    emails: [
                        { id: 1, content: 'Hi Jackie, thoughts on the new design?' },
                        { id: 2, content: 'Love it! Just a few tweaks needed.' }
                    ]
                }
            ],
            notes: [
                { id: 1, content: 'Has a strong eye for design aesthetics' }
            ]
        },
        {
            id: 16,
            name: 'Kara Miller',
            mail: "kara_miller@example.com",
            phone: '555-4568',
            place: "San Francisco",
            avatar: avatar1,
            tags: ["proposal", "timeline", "questions"],
            emailThreads: [
                {
                    id: 1,
                    date: '2024-11-17',
                    subject: 'Questions on Proposal Timeline',
                    emails: [
                        { id: 1, content: 'Hi Kara, do you have any questions on the timeline?' },
                        { id: 2, content: 'Yes, a few clarifications. Can we schedule a call?' }
                    ]
                }
            ],
            notes: [
                { id: 1, content: 'Frequently asks about project timelines' }
            ]
        },
        {
            id: 17,
            name: 'Liam Peterson',
            mail: "liam_peterson@example.com",
            phone: '555-8901',
            place: "Austin",
            avatar: avatar1,
            tags: ["resources", "cost", "scope"],
            emailThreads: [
                {
                    id: 1,
                    date: '2024-11-18',
                    subject: 'Project Scope Discussion',
                    emails: [
                        { id: 1, content: 'Hi Liam, let’s finalize the project scope.' }
                    ]
                }
            ],
            notes: [
                { id: 1, content: 'Keeps an eye on resources and costs' }
            ]
        },
        {
            id: 18,
            name: 'Mila Hayes',
            mail: "mila_hayes@example.com",
            phone: '555-4567',
            place: "Chicago",
            avatar: avatar1,
            tags: ["contract", "negotiation", "term"],
            emailThreads: [
                {
                    id: 1,
                    date: '2024-11-19',
                    subject: 'Contract Negotiations',
                    emails: [
                        { id: 1, content: 'Hi Mila, let’s discuss the contract terms.' }
                    ]
                }
            ],
            notes: [
                { id: 1, content: 'Focused on contract terms and negotiation' }
            ]
        },
        {
            id: 19,
            name: 'Noah Young',
            mail: "noah_young@example.com",
            phone: '555-5674',
            place: "Oslo",
            avatar: avatar1,
            tags: ["budget", "proposal", "discussion"],
            emailThreads: [
                {
                    id: 1,
                    date: '2024-11-20',
                    subject: 'Budget Proposal Discussion',
                    emails: [
                        { id: 1, content: 'Hi Noah, let’s discuss the budget proposal.' },
                        { id: 2, content: 'Sounds good. Let’s arrange a meeting.' }
                    ]
                }
            ],
            notes: [
                { id: 1, content: 'Budget-focused and open to discussions' }
            ]
        },
        {
            id: 20,
            name: 'Olivia Garcia',
            mail: "olivia_garcia@example.com",
            phone: '555-3459',
            place: "Melbourne",
            avatar: avatar1,
            tags: ["detail-oriented", "schedule", "timeline"],
            emailThreads: [
                {
                    id: 1,
                    date: '2024-11-21',
                    subject: 'Project Schedule Confirmation',
                    emails: [
                        { id: 1, content: 'Hi Olivia, please confirm the project schedule.' }
                    ]
                }
            ],
            notes: [
                { id: 1, content: 'Pays close attention to scheduling and timelines' }
            ]
        }
    ]
};

export default initialState;
