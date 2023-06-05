const filter=(props)=>{

    const yearChange=(event)=>{
        props.onChangeFilter(event.target.value);
    }

    return(
        <div>
        <h3>Filter by year</h3>
        <select value={props.selected} onChange={yearChange}>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2021">2021</option>
        </select>
        </div>
    
    )
}

export default filter;