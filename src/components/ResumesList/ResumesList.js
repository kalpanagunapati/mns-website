import React from 'react'
import {
    Card,
    CardContent,
    Typography,
    Grid,
    Avatar,
    Chip,
    Stack,
    Box
} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
const dummyResumes=[
    {
        id:1,
        name:'Rahul',
        location:'Hyderabad',
        experience:'Fresher',
        skills:['React','Node.js','Mango.DB'],
        projects:[
            {
                titel:"Job Portal Web App",
                description:"Built a full-stack job portal with login for recruiters and job seekers, job posting, filtering, and resume screening features."
            },
            {
                titel:"Job Portal Web App",
                description:"Built a full-stack job portal with login for recruiters and job seekers, job posting, filtering, and resume screening features."
            },
        ]
    },
    {
        id:2,
        name:'kalpana',
        location:'Hyderabad',
        experience:'Fresher',
        skills:['React','Node.js','Mango.DB','Angular','Python'],
        projects:[
            {
                titel:"Job Portal Web App",
                description:"Built a full-stack job portal with login for recruiters and job seekers, job posting, filtering, and resume screening features."
            },
            {
                titel:"Job Portal Web App",
                description:"Built a full-stack job portal with login for recruiters and job seekers, job posting, filtering, and resume screening features."
            },
        ]
    },
    {
        id:3,
        name:'Vikash',
        location:'Chennai',
        experience:'3+ years',
        skills:['Java','Spring Boot','AWS'],
        projects:[
            {
                titel:"Job Portal Web App",
                description:"Built a full-stack job portal with login for recruiters and job seekers, job posting, filtering, and resume screening features."
            },
            {
                titel:"Job Portal Web App",
                description:"Built a full-stack job portal with login for recruiters and job seekers, job posting, filtering, and resume screening features."
            },
        ]
    },
    {
        id:4,
        name:'Sandeep',
        location:'Hyderabad',
        experience:'2+ years',
        skills:['React','Node.js','Mango.DB','Sql','Express.js'],
        projects:[
            {
                titel:"Job Portal Web App",
                description:"Built a full-stack job portal with login for recruiters and job seekers, job posting, filtering, and resume screening features."
            },
            {
                titel:"Job Portal Web App",
                description:"Built a full-stack job portal with login for recruiters and job seekers, job posting, filtering, and resume screening features."
            },
        ]
    },
]
const ResumeList = () =>{
    return(
        <Box mt={4}>
            <Typography variant='h5' gutterBottom>
                Available Resumes
            </Typography>
            <Grid container spacing={2}>
                {dummyResumes.map((resume)=>(
                    <Grid item xs={12} sm={6} md={4} key={resume.id} >
                        <Card variant='outlined'width="500px">
                            <CardContent>
                                <Stack direction={'row'} spacing={2} alignItems={'center'} mb={2}>
                                    <Avatar>{resume.name[0]}</Avatar>
                                    <Typography variant='h6'>{resume.name}</Typography>
                                </Stack>
                                <Typography variant='body2' color='textSecondary' mb={1}>
                                    <LocationOnIcon fontSize='small'/>{resume.location}
                                </Typography>
                                <Typography variant='body2' color='textSecondary' mb={1}>
                                    <WorkIcon fontSize='small'/>{resume.experience}
                                </Typography>
                                <Stack direction="row" spacing={1} flexWrap="wrap" mt={1}>
                                    {resume.skills.map((skill, index) => (
                                        <Chip key={index} label={skill} size="small" />
                                    ))}
                                </Stack>
                                <Box mt={2}>
                                    <Typography variant='subtitle1' fontWeight={'bold'} gutterBottom>
                                        Projects:
                                    </Typography>
                                    {resume.projects.map((project,index)=>(
                                        <Box key={index} mb={1}>
                                        <Typography variant='subtitle1' fontWeight={'bold'}>
                                            .{project.titel}
                                        </Typography>
                                        <Typography variant='subtitle1' color='text.secondary'>
                                            {project.description}
                                        </Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}
export default ResumeList
