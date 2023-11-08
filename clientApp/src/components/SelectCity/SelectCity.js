import React, { useEffect, useState } from "react";
import { FaSearchLocation } from "react-icons/fa";
import { MdOutlineLocationSearching } from "react-icons/md";
import clsx from "clsx";
import PlacesAutocomplete from "react-places-autocomplete";
import "./selectCity.scss";
const SelectCity = ({ changeHandler, name, blurHandler, clear }) => {
  const [address, setAdress] = useState("");

  const onSelect = (adress) => {
    changeHandler(adress);
    setAdress(adress);
  };
  const onChange = (value) => {
    setAdress(value);
  };
  useEffect(() => {
    if (clear) {
      setAdress("");
    }
  }, [clear]);

  return (
    <PlacesAutocomplete
      value={address}
      onChange={onChange}
      onSelect={onSelect}
      debounce={500}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div className="sc">
          <div className="sc__field">
            <FaSearchLocation className="sc__iconSearch" />
            <MdOutlineLocationSearching className="sc__iconTarget" />
            <input
              {...getInputProps({
                placeholder: "Начните вводить название города",
                className: "sc__input ",
                name,
                onBlur: blurHandler,
              })}
            />
          </div>

          <div className={clsx({ sg: suggestions.length !== 0 })}>
            {loading && <div>Loading...</div>}
            {suggestions.map((suggestion, i) => {
              const className = suggestion.active
                ? "sg__item sg__item--active"
                : "sg__item";
              return (
                <div
                  key={i}
                  {...getSuggestionItemProps(suggestion, {
                    className,
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default SelectCity;
