import React, { useState, useEffect } from 'react'
import { fetchCustomers } from './Data/CustomerData';
import Select from 'react-select'

export const TimeReg = () => {
    const [companies, setCompanies] = useState([])
    const [projects, setProjects] = useState([])

    const [selectedCompany, setSelectedCompany] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const [antalTimmar, setAntalTimmar] = useState(0);
    const [antalMinuter, setAntalMinuter] = useState(0);
    const [description, setDescription] = useState(null);


    useEffect(()=>{
        fetchCustomers().then( result => {
            setCompanies(result)
            onSetSelectedCompany(result[0].id)
         }
        )
    },
        
    []);

    const onSetSelectedCompany = (id)=>{
        setSelectedCompany(id)
        var customer = companies.find(c=>c.id == parseInt(id))
        setProjects(customer.projects)
        setSelectedProject(customer.projects[0])
    }



    const onRegister = ()=>{
        //Validera + spara
        var result = {
            "Company": selectedCompany,
            "Project": selectedProject,
            "Timmar": antalTimmar,
            "Minuter": antalMinuter,
            "Desciption": description
        }    ;        
        console.log(result)
        //fetch
    }
    

  return (
    <section className="products" id="products">
        <h1 className="heading"> <span>Super</span> TimeReg </h1>
        <form>


                <select onChange={e=>onSetSelectedCompany(e.target.value)}>
                {companies.map( p => 
                    <option value={p.id}>{p.title}</option>
                    )}
                </select>

                <h2>{selectedCompany}</h2>        
                 <select name="project" onChange={e=>setSelectedProject(e.target.value)}>
                {projects.map( p => 
                    <option>{p}</option>
                    )}
                </select> 



            
             <label>
                Timmar:
                <input type="text" name="hours" value={antalTimmar} onChange={e=>setAntalTimmar(e.target.value)} />
            </label>
            <label>
                Minuter:
                <input type="text" name="min"  value={antalMinuter} onChange={e=>setAntalMinuter(e.target.value)} />
            </label>

            <textarea value={description} onChange={e=>setDescription(e.target.value)} rows="4" cols="40">
                
            </textarea>

            <input onClick={onRegister} type="button" value="Save" />
                        
        </form>
    </section>
  )
}
