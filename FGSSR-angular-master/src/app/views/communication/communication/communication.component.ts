import { Component, OnInit } from "@angular/core";
import { NgForm, FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { JwtAuthService } from "app/shared/services/auth/jwt-auth.service";
import { DataService } from "app/shared/services/data.service";
@Component({
  selector: "app-communication",
  templateUrl: "./communication.component.html",
  styleUrls: ["./communication.component.scss"],
})
export class CommunicationComponent implements OnInit {
  showAdditionalProjects = false;
  showprojectdescription = false;
  contactForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userData: DataService,
    private JwtAuth: JwtAuthService
  ) {}
  posts: any;

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      description: [null],
    });

    this.contactForm.get("description").valueChanges.subscribe((f) => {
      this.ondescriptionChanged(f);
    });
  }

  //Add project
  descriptions = [
    "Social Media App Development",
    "E-commerce Website Development",
    "Data Visualization Dashboard Development",
    "Online Education Platform Development",
    "E-commerce Platform Development",
    "Cloud-Based File Storage and Sharing System",
    "E-commerce Inventory Management",
    "Cloud-Based HR Management System",
    "Online Learning Platform",
    "Digital Asset Management System",
    "Health and Wellness App",
    "Online Appointment Booking System",
    "Event Management System",
    "Online Food Delivery Platform",
    "Personal Finance Management Tool",
    "E-learning Game Platform",
    "Real Estate Property Management System",
    "Online Gaming Platform",
    "Online Event Ticketing Platform Development",
    "Online Travel Booking System",
    "Social Impact Assessment and Reporting Tool",
    "Online Real Estate Marketplace",
    "Online Voting System",
    "Online Music Instrument Learning Platform",
    "Online Pet Store",
    "Online Trading Platform",
    "Online Language Translation Platform",
    "Restaurant Ordering and Reservation System",
    "Online Medical Appointment Scheduling System",
    "Online Travel Guide and Trip Planning Platform",
    "Personalized News Aggregator",
    "Online Dating Platform",
    "Online Marketplace for Handmade Crafts",
    "Online Auction Website Development",
    "Online Grocery Delivery Platform Development",
    "Online Marketplace for Freelancers",
    "Online Language Learning Platform",
    "Online Course Booking System",
    "Online Art Portfolio and Showcase",
    "E-learning Management System",
    "Online Bookstore Website Development",
    "Online Donation Platform Development",
    "Music Streaming Platform Development",
    "Cryptocurrency Exchange Platform Development",
    "Online Job Portal Development",
    "Restaurant Management System",
    "Online Doctor Consultation Platform",
    "Recipe Sharing Website Development",
    "Online Art Gallery and Marketplace",
    "Online Marketplace for Handmade Goods",
    "Online Home Rental Management System",
    "Online Ticket Booking System",
    "Personal Finance Management Web Application",
    "Online Gaming Platform Development",
    "Online Therapy Platform Development",
    "Online Event Management System",
    "Online Auction System",
    "Online Rental Marketplace Platform Development",
    "Online Learning Management System",
    "Online Food Ordering and Delivery System",
    "Car Rental System",
    "Job Board Website Development",
    "Online Fitness Training Platform",
    "Job Search and Recruitment Platform Development",
    "Online Legal Services Marketplace",
    "E-commerce Marketplace for Second-hand Goods",
    "Online Mental Health Support Platform",
    "Social Network for Freelancers and Clients",
    "Online Language Exchange Platform",
    "Online Gift and Flower Delivery Service",
    "Online Bookstore and Reading Recommendation System",
    "Online Course Marketplace",
    "Online Movie and TV Show Streaming Platform",
    "Online Beauty and Personal Care Marketplace",
    "Online Language Interpretation and Translation Tool",
    "Online Graphic Design Marketplace",
    "Online Coupon and Discount Aggregator",
    "Online Childcare and Babysitting Service",
    "Online Pet Adoption and Care Platform",
    "Online Recipe and Meal Planning Platform",
    "Online Personal Finance Management Platform",
    "Online Interior Design and Home Decor Service",
    "Online Volunteer Management System",
    "Online Task Management and Collaboration Tool",
    "Online Music Streaming Platform",
    "Online Personal Styling and Fashion Service",
    "Online Plant and Gardening Marketplace",
    "Online Event Planning and Management Platform",
    "Online Music Streaming Application",
    "Weather Forecasting Application Development",
    "Healthcare Mobile App Development",
    "Health and Fitness Mobile App Development",
    "Personal Finance Management Application",
    "Virtual Personal Styling Assistant",
    "Augmented Reality Interior Design",
    "Cryptocurrency Trading Bot",
    "Chatbot for Customer Support",
    "Smart Home Automation System",
    "Automated Trading System",
    "Smart Farming System",
    "E-learning Content Creation Tool",
    "Healthcare Chatbot",
    "Language Translation Application",
    "Chat Application Development",
    "Chatbot Development for Customer Support",
    "Virtual Reality Game Development",
    "Mobile Game Development",
    "Augmented Reality App Development",
    "Virtual Interior Design Platform",
    "Natural Language Processing (NLP) Chatbot Development",
    "IoT-based Smart Home Automation System",
    "Blockchain-based Voting System",
    "Social Media Analytics",
    "Natural Language Processing Chatbot",
    "IoT Home Automation System",
    "Computer Vision-Based Security System",
    "Social Media Sentiment Analysis",
    "Healthcare AI Diagnosis System",
    "Digital Marketing Analytics",
    "Cybersecurity Monitoring Tool",
    "3D Printing and Modeling",
    "Sports Analytics",
    "Speech Recognition and Synthesis",
    "Quantum Computing",
    "Digital Twin Technology",
    "Environmental Monitoring System",
    "Natural Disaster Prediction",
    "Autonomous Delivery Drones",
    "AI-Powered Financial Advisor",
    "Recommendation System",
    "Social Network Analysis",
    "Smart Home Automation",
    "Music Recommendation System",
    "Voice Assistant for Smart Homes",
    "News Recommendation System",
    "Renewable Energy Management System",
    "Text-to-Speech and Speech-to-Text System",
    "Social Network Analysis and Visualization",
    "Movie Recommendation Engine",
    "Mental Health Chatbot Development",
    "Chatbot Development",
    "Recipe Sharing and Meal Planning Application",
    "Weather Forecasting and Alert Application",
    "Personal Finance Tracker Application",
    "Car Rental Mobile Application",
    "Online Health and Fitness Tracker Application",
    "Personalized Workout and Meal Plan Mobile App",
    "Language Translation Mobile Application",
    "Recipe Finder Mobile Application",
    "Pet Care Mobile Application",
    "Fitness Tracker Mobile Application",
    "Health Monitoring System",
    "Traffic Management System",
    "Smart Parking System",
  ];
  showprojects() {
    this.showprojectdescription = true;
  }
  submit() {
    if (
      this.contactForm.value == undefined ||this.contactForm.value.description == undefined
    ) {
      console.log(this.contactForm.value);
      alert("please select Project");
    } else {
      console.log(this.contactForm.value);
      this.userData
        .CreateProject(
          this.contactForm.value.description,
          this.JwtAuth.decodedToken.unique_name[0]
        )
        .subscribe(() => {
          alert(this.contactForm.value.description + "  Add Successfully");
        });
    }
  }

  ondescriptionChanged(value) {
    // console.log("onaddChanged");
    // console.log(value);
  }

  //projects details
  projects = [
    {
      title: "Social Media App Development",
      description:
        "Create a new social media app that allows users to connect with friends and family, share photos and videos, and discover new interests.",
      additionalDetails:
        "The app can include features such as chat, groups, events, and monetization options for influencers.",
    },
    {
      title: "E-commerce Website Development",
      description:
        "Build an online store that allows customers to browse and purchase products, track orders, and manage their accounts.",
      additionalDetails:
        "The website can include marketing tools such as email campaigns, social media integration, and SEO optimization.",
    },
    {
      title: "Mobile Game Development",
      description:
        "Create a new mobile game that engages users through fun gameplay, challenging levels, and rewards for progress.",
      additionalDetails:
        "The game can include features such as in-app purchases, social media integration, and leaderboard rankings.",
    },
    {
      title: "Data Analysis and Visualization",
      description:
        "Analyze large datasets from various sources and create visualizations that showcase insights and trends.",
      additionalDetails:
        "The project can include tools such as Python, R, and Tableau to manipulate and present data.",
    },
    {
      title: "Recipe Sharing Website Development",
      description:
        "Develop a website that allows users to share and discover new recipes, create meal plans, and interact with a community of food enthusiasts.",
      additionalDetails:
        "The website can include features such as recipe search, meal planner, and user reviews.",
    },
    {
      title: "Online Art Gallery and Marketplace",
      description:
        "Create an online platform that showcases artworks from emerging and established artists, and allows users to purchase art directly from the website.",
      additionalDetails:
        "The platform can include features such as artist profiles, artwork categories, and online exhibitions.",
    },
    {
      title: "Online Marketplace for Handmade Goods",
      description:
        "Build an e-commerce platform that specializes in handmade and artisanal products, and allows sellers to create their own online store.",
      additionalDetails:
        "The marketplace can include features such as product categories, seller ratings, and secure payment options.",
    },
    {
      title: "Online Home Rental Management System",
      description:
        "Develop a web-based system that allows homeowners to manage their rental properties, and tenants to search and rent properties online.",
      additionalDetails:
        "The system can include features such as rental listings, tenant screening, and lease management.",
    },
    {
      title: "Online Ticket Booking System",
      description:
        "Create a ticket booking platform that allows users to book and purchase tickets for events such as concerts, movies, and sports.",
      additionalDetails:
        "The platform can include features such as seat selection, event calendar, and ticket scanning.",
    },
    {
      title: "Personal Finance Management Web Application",
      description:
        "Build a web-based application that allows users to track their income and expenses, create budgets, and manage their finances.",
      additionalDetails:
        "The application can include features such as transaction categorization, financial reports, and investment tracking.",
    },
    {
      title: "Online Gaming Platform Development",
      description:
        "Develop an online gaming platform that allows users to play games with each other, earn rewards, and connect with friends.",
      additionalDetails:
        "The platform can include features such as game library, chat system, and user profiles.",
    },
    {
      title: "Online Therapy Platform Development",
      description:
        "Create an online therapy platform that connects users with licensed therapists, and allows them to attend therapy sessions remotely.",
      additionalDetails: "The platform can include fe",
    },
    // Add more projects here
  ];

  additionalProjects = [
    {
      title: "Online Learning Platform",
      description:
        "Develop an online learning platform that offers courses, lectures, and tutorials on a variety of topics, with the ability to track progress and earn certificates.",
      additionalDetails:
        "The platform can also include social learning tools such as discussion forums and peer review.",
    },
    {
      title: "Online Medical Appointment Scheduling System",
      description:
        "Develop an appointment booking system that allows patients to schedule medical appointments online, with automatic reminders and confirmation emails.",
      additionalDetails:
        "The system can also integrate with electronic health records and other medical systems.",
    },
    // Add more additional projects here
  ];
  showMore() {
    this.showAdditionalProjects = true;
  }

  addProject(): any {
    // console.log("sddsdvdvsv");
  }
}
