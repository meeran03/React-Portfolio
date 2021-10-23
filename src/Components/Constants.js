import project1 from '../assets/images/project1.jpg'
import project2 from '../assets/images/project2.jpg'
import project3 from '../assets/images/project3.jpg'
import project4 from '../assets/images/project4.jpg'

const Constants = {
    name : "Meeran Malik",
}
export const skills = [
    {
        name : "Python",
        level : 100,
        color : "dodgerblue",
        description : "I have been working with Python for the last 2 years. I have done certification in Python for automation from Google, I have made a python protobot using neo4j database.I am proud to say that I am a pythonist and believe in the power of Python"
    },
    {
        name : "Django",
        level : 90,
        color : "green",
        description : "I learned Django because I wanted to learn web development using my fav language Python. So far I have created many Projects including vehicle tracking web application using Django."
    },
    {
        name : "ReactJS",
        level : 100,
        color : "orange",
        description : "I have been working with Python for the last 2 years. I have done certification in Python for automation from Google,"
    },
    {
        name : "React Native",
        level : 100,
        color : "blue",
        description : "I have been working with Python for the last 2 years. I have done certification in Python for automation from Google,"
    },
]

export const projects = [
    {
        title : "Django Website",
        image : project1,
        category : "React Native App"
    },
    {
        title : "Python Chatbot",
        image : project2,
        category :"React Native App"
    },
    {
        title : "React Native Apps",
        image : project3,
        category :" React Native App"
    },
    {
        title : "ReactJS Admin Panel",
        image : project4,
        category :" React Native App"
    },
]
export default Constants;
