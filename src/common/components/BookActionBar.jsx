import React, { useState } from 'react';
import Select from 'react-select';
import completed from '../assets/completed.svg'

function BookActionBar() {
  const data = [
    {
      text: 'Add to shelf',
      icon: <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="44" height="44" rx="5" fill="#14181F" fillOpacity="0.1"/>
      <path d="M15 30.25V15C15 13.8954 15.8954 13 17 13H28C28.5523 13 29 13.4477 29 14V27C29 27.5523 28.5523 28 28 28M15 30.25C15 29.0074 16.0074 28 17.25 28H28M15 30.25C15 30.6642 15.3358 31 15.75 31H27C27.5523 31 28 30.5523 28 30V28" stroke="#14181F" strokWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>      
    },
    {
      text: 'Reading',
      icon: <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="44" height="44" rx="5" fill="#382110" fillOpacity="0.1"/>
      <path d="M25 15H30C30.5523 15 31 15.4477 31 16V26C31 26.5523 30.5523 27 30 27H25.6056C24.6025 27 23.6658 27.5013 23.1094 28.3359L22 30V18C22 16.3431 23.3431 15 25 15Z" stroke="#382110" strokewidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19 15H14C13.4477 15 13 15.4477 13 16V26C13 26.5523 13.4477 27 14 27H18.3944C19.3975 27 20.3342 27.5013 20.8906 28.3359L22 30V18C22 16.3431 20.6569 15 19 15Z" stroke="#382110" strokewidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>      
    },
    {
      text: 'Completed',
      icon: <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="44" height="44" rx="5" fill="#01625D" fill-opacity="0.1"/>
      <path d="M16 22L20.2426 26.2426L28.7279 17.7573" stroke="#01625D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    }
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  // handle onChange event of the dropdown
  const handleChange = e => {
    setSelectedOption(e);
  }

  return (
    <div className="action-bar">
      <Select
        placeholder="Select Option"
        value={selectedOption}
        options={data}
        onChange={handleChange}
        getOptionLabel={e => ( 
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {e.icon}
            <span style={{ marginLeft: 5 }}>{e.text}</span>
          </div>
        )}
        styles={{
          control: (provided, state) => {
            let borderColor = "transparent";
            let color = "black";
            if (state.selectProps.value) {
              if (state.selectProps.value.text.includes("Completed")) {
                borderColor = "green";
                color = "green";
              } else if (state.selectProps.value.text.includes("Add to shelf")) {
                borderColor = "brown";
                color = "brown";
              } else if (state.selectProps.value.text.includes("Reading")) {
                borderColor = "orange";
                color = "orange";
              }
            }
            return {
              ...provided,
              backgroundColor: "#F6F6F6",
              borderColor: borderColor,
              "&:hover": { backgroundColor: "#F6F6F6" },
              boxShadow: "none",
              color: color,
              caretColor: "transparent"
            }
          },
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? "transparent" : "white",
            color: "black"
          })
        }}
      />

    </div>
  );
}

export default BookActionBar;