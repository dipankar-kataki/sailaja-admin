import React,{useEffect, useState} from 'react'
import ProjectCard from '../../components/Cards/ProjectCard'
import styles from "./ProjectList.module.css"
import axios from 'axios'

const ProjectList = () => {

  const [allProjects, setAllProjects] = useState([]);
 
  useEffect(()=> {
    axios.get('http://139.59.17.6/api/project/all/admin', {
    })
    .then(function (response) {
      setAllProjects(response.data.data)
      console.log(response.data.data.length)
 
    })
    .catch(function (error) {
      console.log(error);
    })
  },[])




  return (
    <div className={styles.projectList_container}>
      {allProjects.map((projectInfo,i)=> (
        <ProjectCard key={i} projectInfo={projectInfo}/>
      ))}
      
    </div>
  )
}

export default ProjectList