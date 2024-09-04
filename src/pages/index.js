import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { Mail, Phone } from 'lucide-react'

//import Resume from "../components/Resume"

const IndexPage = ({ data }) => {

  const { personalInfo, experience, education, skills } = data.dataJson

  return (
      
    <Layout>
      <section id="about" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-teal-400">About Me</h2>
        <h1 className="text-4xl font-bold mb-2">{personalInfo.name}</h1>
        <p className="text-xl text-gray-400 mb-4">{personalInfo.title}</p>
        <p className="text-gray-300 mb-4">{personalInfo.summary}</p>
        <p className="text-gray-300">{personalInfo.location}</p>
      </section>

      <section id="experience" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-teal-400">Experience</h2>
        {experience.map((job, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg font-medium mb-2 text-teal-400">{job.title} - {job.company}</h3>
            <p className="text-gray-400 mb-2">{job.startDate} - {job.endDate}</p>
            <p className="text-gray-400 mb-2">{job.location}</p>
            <p className="text-gray-300">{job.description}</p>
          </div>
        ))}
      </section>

      <section id="education" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-teal-400">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg font-medium mb-2 text-teal-400">{edu.degree}</h3>
            <p className="text-gray-400 mb-2">{edu.institution}, {edu.location}</p>
            <p className="text-gray-400">{edu.startDate} - {edu.graduationDate}</p>
          </div>
        ))}
      </section>

      <section id="skills" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-teal-400">Skills</h2>
        <ul className="list-disc list-inside text-gray-300">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <section id="contact" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-teal-400">Contact</h2>
        <p className="flex items-center text-gray-300 mb-2">
          <Mail className="w-5 h-5 mr-2 text-teal-400" />
          {personalInfo.email}
        </p>
        <p className="flex items-center text-gray-300">
          <Phone className="w-5 h-5 mr-2 text-teal-400" />
          {personalInfo.phone}
        </p>
      </section>
    </Layout>


  )
}

export const query = graphql`
  query {
    dataJson {
      personalInfo {
        name
        title
        email
        phone
        location
        summary
      }
      experience {
        title
        company
        location
        startDate
        endDate
        description
      }
      education {
        degree
        institution
        location
        graduationDate
        startDate
      }
      skills
    }
  }
`


export default IndexPage

//export const Head = () => <title>Home Page</title>
