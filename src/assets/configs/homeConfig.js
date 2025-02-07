import React from 'react'
import {BsClipboardData} from "react-icons/bs";
import {DiCodeigniter} from "react-icons/di";
import {GiCommercialAirplane} from "react-icons/gi";
import {FaMobileAlt} from "react-icons/fa";
import { BiRocket } from "react-icons/bi";

const homeConfig = {
    greeting:
        <h1 className="heading">
            Hello! I'm <strong className="main-name"> Israr Ahmad</strong>
        </h1>,
    titles: [
        "A Data Scientist",
        "A Machine Learning Specialist",
        "An Open Source Contributor",
        "A Backend Developer",
        "A Colombian"
    ],
    about: {
        start: "My research spans the intersection of artificial intelligence, medical imaging, and " +
            "computational vision, focusing on developing innovative solutions for complex healthcare " +
            "and imaging challenges. This unique combination allows me to contribute to both theoretical " +
            "advancements and practical implementations in medical and computer vision domains.",
        exit: "I am actively seeking collaboration opportunities in medical imaging research groups, " +
            "computer vision laboratories, healthcare AI initiatives, and cross-disciplinary imaging " +
            "projects."
    },
    research: {
        coreAreas: {
            medicalImaging: {
                title: "Medical Imaging & Healthcare AI",
                diagnosticSystems: {
                    title: "Diagnostic Imaging Systems",
                    items: [
                        "Development of AI-powered diagnostic tools for autism spectrum disorder detection using facial analysis",
                        "Experience with various imaging modalities and their applications",
                        "Interest in advancing medical image reconstruction and analysis techniques"
                    ]
                },
                clinicalApplications: {
                    title: "Clinical Applications",
                    items: [
                        "Integration of deep learning in healthcare diagnostics",
                        "Pattern recognition for medical image analysis",
                        "Development of robust automated detection systems"
                    ]
                }
            },
            computerVision: {
                title: "Computer Vision & Pattern Recognition",
                advancedSystems: {
                    title: "Advanced Vision Systems",
                    items: [
                        "Design and implementation of novel neural architectures (PIYN) for improved object detection",
                        "Development of racial identity-aware facial expression recognition systems",
                        "Real-time processing and analysis of visual data"
                    ]
                },
                infrastructure: {
                    title: "Infrastructure Monitoring",
                    items: [
                        "Creation of automated systems for road crack and pothole detection",
                        "Implementation of smart city monitoring solutions",
                        "Development of efficient visual inspection systems"
                    ]
                }
            },
            computationalImaging: {
                title: "Computational Imaging & Reconstruction",
                reconstruction: {
                    title: "Image Reconstruction Algorithms",
                    items: [
                        "Interest in developing efficient reconstruction methods for medical imaging",
                        "Experience with deep learning-based image enhancement",
                        "Focus on real-time processing capabilities"
                    ]
                },
                multiModal: {
                    title: "Multi-modal Imaging",
                    items: [
                        "Integration of various imaging modalities for comprehensive analysis",
                        "Development of cross-modal learning approaches",
                        "Interest in advancing image registration techniques"
                    ]
                }
            }
        },
        currentDirections: {
            aiMedical: {
                title: "AI in Medical Imaging",
                items: [
                    "Development of robust deep learning models for medical image analysis",
                    "Integration of computer vision techniques in healthcare applications"
                ],
                interests: [
                    "Medical image reconstruction",
                    "Tomographic imaging",
                    "Non-parametric estimation methods",
                    "Inverse problems in imaging"
                ]
            },
            computing: {
                title: "Advanced Computing Paradigms",
                edge: [
                    "Development of lightweight neural networks for resource-constrained environments",
                    "Real-time processing optimization",
                    "Distributed AI systems"
                ],
                optimization: [
                    "Architecture design for efficient inference",
                    "Transfer learning applications",
                    "Performance optimization techniques"
                ]
            }
        },
        expertise: {
            tools: {
                deepLearning: ["PyTorch", "TensorFlow", "FastAI"],
                imageProcessing: ["OpenCV", "scikit-image"],
                scientificComputing: ["MATLAB", "Python Scientific Stack"],
                dataAnalysis: ["Pandas", "NumPy", "SciPy"]
            },
            methodologies: [
                "Deep Learning Architecture Design",
                "Image Reconstruction Algorithms",
                "Pattern Recognition Systems",
                "Statistical Analysis",
                "Performance Optimization"
            ]
        },
        philosophy: [
            {
                title: "Integration of Theory and Practice",
                points: [
                    "Balancing theoretical foundations with practical implementations",
                    "Focus on reproducible research",
                    "Emphasis on open-source contributions"
                ]
            },
            {
                title: "Cross-Disciplinary Innovation",
                points: [
                    "Combining medical imaging with AI advances",
                    "Integrating multiple imaging modalities",
                    "Bridging computational and clinical needs"
                ]
            },
            {
                title: "Impact-Driven Development",
                points: [
                    "Focus on clinically relevant solutions",
                    "Emphasis on practical deployability",
                    "Commitment to healthcare advancement"
                ]
            }
        ],
        futureGoals: [
            "Advancing medical image reconstruction techniques",
            "Developing novel AI architectures for healthcare applications",
            "Contributing to open-source medical imaging tools",
            "Exploring new frontiers in computational imaging",
            "Integrating machine learning with traditional imaging methods"
        ],
        collaborationInterests: [
            "Medical imaging research groups",
            "Computer vision laboratories",
            "Healthcare AI initiatives",
            "Cross-disciplinary imaging projects",
            "Open-source medical imaging software development"
        ]
    },
    workTimeline: [
        {
            id: "work-4",
            title: "Sr ML Engineer",
            company: "EPAM",
            description: "Working to build scalable ML solutions, LLM's, and RAG architectures.",
            date: "2023-Present",
            icon: <BiRocket/>,
            tags: ["ml", "mlops", "python", "azure", "llm", "automl"]
        },
        {
            id: "work-3",
            title: "Sr Data Scientist",
            company: "Globant",
            description: "Build AutoML models and make them available to non-technical " +
                "users from a graphical interface.",
            date: "2021-2023",
            icon: <DiCodeigniter/>,
            tags: ["ml", "automl", "python", "docker", "redshift", "superset"]
        },
        {
            id: "work-2",
            title: "BI Manager",
            company: "Rappi",
            description: "Leading a team of analysts and data scientists to execute different projects, " +
                "including the construction of ETLs, data lakes, data warehouses, and machine learning models.",
            date: "2019-2021",
            icon: <FaMobileAlt/>,
            tags: ["ml", "airflow", "python", "docker", "snowflake", "postgres", "azure"]
        },
        {
            id: "work-1",
            title: "CRM Analytics Coordinator",
            company: "Avianca",
            description: "Tech leader of a BI, Data Science and DBA team. " +
                "Build forecast models, data warehouse and Power BI dashboards.",
            date: "2018-2019",
            icon: <GiCommercialAirplane/>,
            tags: ["ml", "mssql", "python", "docker", "pbi", "azure"]
        },
        {
            id: "work-0",
            title: "BI Analyst",
            company: "Onelink BPO",
            description: "Build interactive dashboards, ETLs and SQL queries to show the company KPIs.",
            date: "2016-2018",
            icon: <BsClipboardData/>,
            tags: ["python", "mssql", "pbi", "excel"]
        }
    ]
}

export default homeConfig
