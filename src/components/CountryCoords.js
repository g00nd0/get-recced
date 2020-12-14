import React, { Component } from "react";

const coordinates = {
  // put object with country and coordinates here?
};

const getCoords = () => {};

const CountryCoords = () => {};

export class CountryCoords extends Component {
  render() {
    return <div></div>;
  }
}

export default CountryCoords;

{
  /* <div>
<div class="countryCol">
<a href="https://www.metal-archives.com/lists/AF">Afghanistan</a><br>
<a href="https://www.metal-archives.com/lists/AX">Åland Islands</a><br>
<a href="https://www.metal-archives.com/lists/AL">Albania</a><br>
<a href="https://www.metal-archives.com/lists/DZ">Algeria</a><br>
<a href="https://www.metal-archives.com/lists/AD">Andorra</a><br>
<a href="https://www.metal-archives.com/lists/AO">Angola</a><br>
<a href="https://www.metal-archives.com/lists/AR">Argentina</a><br>
<a href="https://www.metal-archives.com/lists/AM">Armenia</a><br>
<a href="https://www.metal-archives.com/lists/AW">Aruba</a><br>
<a href="https://www.metal-archives.com/lists/AU">Australia</a><br>
<a href="https://www.metal-archives.com/lists/AT">Austria</a><br>
<a href="https://www.metal-archives.com/lists/AZ">Azerbaijan</a><br>
<a href="https://www.metal-archives.com/lists/BH">Bahrain</a><br>
<a href="https://www.metal-archives.com/lists/BD">Bangladesh</a><br>
<a href="https://www.metal-archives.com/lists/BB">Barbados</a><br>
<a href="https://www.metal-archives.com/lists/BY">Belarus</a><br>
<a href="https://www.metal-archives.com/lists/BE">Belgium</a><br>
<a href="https://www.metal-archives.com/lists/BZ">Belize</a><br>
<a href="https://www.metal-archives.com/lists/BO">Bolivia</a><br>
<a href="https://www.metal-archives.com/lists/BA">Bosnia and Herzegovina</a><br>
<a href="https://www.metal-archives.com/lists/BW">Botswana</a><br>
<a href="https://www.metal-archives.com/lists/BR">Brazil</a><br>
<a href="https://www.metal-archives.com/lists/BN">Brunei</a><br>
<a href="https://www.metal-archives.com/lists/BG">Bulgaria</a><br>
<a href="https://www.metal-archives.com/lists/KH">Cambodia</a><br>
<a href="https://www.metal-archives.com/lists/CA">Canada</a><br>
<a href="https://www.metal-archives.com/lists/CL">Chile</a><br>
<a href="https://www.metal-archives.com/lists/CN">China</a><br>
<a href="https://www.metal-archives.com/lists/CO">Colombia</a><br>
<a href="https://www.metal-archives.com/lists/CR">Costa Rica</a><br>
<a href="https://www.metal-archives.com/lists/HR">Croatia</a><br>
<a href="https://www.metal-archives.com/lists/CU">Cuba</a><br>
<a href="https://www.metal-archives.com/lists/CW">Curaçao</a><br>
<a href="https://www.metal-archives.com/lists/CY">Cyprus</a><br>
<a href="https://www.metal-archives.com/lists/CZ">Czechia</a><br>
<a href="https://www.metal-archives.com/lists/DK">Denmark</a><br>
<a href="https://www.metal-archives.com/lists/DO">Dominican Republic</a><br>
<a href="https://www.metal-archives.com/lists/TL">East Timor</a><br>
<a href="https://www.metal-archives.com/lists/EC">Ecuador</a><br>
<a href="https://www.metal-archives.com/lists/EG">Egypt</a><br>
<a href="https://www.metal-archives.com/lists/SV">El Salvador</a><br>
<a href="https://www.metal-archives.com/lists/EE">Estonia</a><br>
<a href="https://www.metal-archives.com/lists/ET">Ethiopia</a><br>
<a href="https://www.metal-archives.com/lists/FO">Faroe Islands</a><br>
<a href="https://www.metal-archives.com/lists/FI">Finland</a><br>
<a href="https://www.metal-archives.com/lists/FR">France</a><br>
<a href="https://www.metal-archives.com/lists/PF">French Polynesia</a><br>
<a href="https://www.metal-archives.com/lists/GE">Georgia</a><br>
<a href="https://www.metal-archives.com/lists/DE">Germany</a><br>
<a href="https://www.metal-archives.com/lists/GI">Gibraltar</a><br>
<a href="https://www.metal-archives.com/lists/GR">Greece</a><br>
</div>
<div class="countryCol">
<a href="https://www.metal-archives.com/lists/GL">Greenland</a><br>
<a href="https://www.metal-archives.com/lists/GU">Guam</a><br>
<a href="https://www.metal-archives.com/lists/GT">Guatemala</a><br>
<a href="https://www.metal-archives.com/lists/GG">Guernsey</a><br>
<a href="https://www.metal-archives.com/lists/GY">Guyana</a><br>
<a href="https://www.metal-archives.com/lists/HN">Honduras</a><br>
<a href="https://www.metal-archives.com/lists/HK">Hong Kong</a><br>
<a href="https://www.metal-archives.com/lists/HU">Hungary</a><br>
<a href="https://www.metal-archives.com/lists/IS">Iceland</a><br>
<a href="https://www.metal-archives.com/lists/IN">India</a><br>
<a href="https://www.metal-archives.com/lists/ID">Indonesia</a><br>
<a href="https://www.metal-archives.com/lists/XX">International</a><br>
<a href="https://www.metal-archives.com/lists/IR">Iran</a><br>
<a href="https://www.metal-archives.com/lists/IQ">Iraq</a><br>
<a href="https://www.metal-archives.com/lists/IE">Ireland</a><br>
<a href="https://www.metal-archives.com/lists/IM">Isle of Man</a><br>
<a href="https://www.metal-archives.com/lists/IL">Israel</a><br>
<a href="https://www.metal-archives.com/lists/IT">Italy</a><br>
<a href="https://www.metal-archives.com/lists/JM">Jamaica</a><br>
<a href="https://www.metal-archives.com/lists/JP">Japan</a><br>
<a href="https://www.metal-archives.com/lists/JE">Jersey</a><br>
<a href="https://www.metal-archives.com/lists/JO">Jordan</a><br>
<a href="https://www.metal-archives.com/lists/KZ">Kazakhstan</a><br>
<a href="https://www.metal-archives.com/lists/KE">Kenya</a><br>
<a href="https://www.metal-archives.com/lists/KR">Korea, South</a><br>
<a href="https://www.metal-archives.com/lists/KW">Kuwait</a><br>
<a href="https://www.metal-archives.com/lists/KG">Kyrgyzstan</a><br>
<a href="https://www.metal-archives.com/lists/LA">Laos</a><br>
<a href="https://www.metal-archives.com/lists/LV">Latvia</a><br>
<a href="https://www.metal-archives.com/lists/LB">Lebanon</a><br>
<a href="https://www.metal-archives.com/lists/LY">Libya</a><br>
<a href="https://www.metal-archives.com/lists/LI">Liechtenstein</a><br>
<a href="https://www.metal-archives.com/lists/LT">Lithuania</a><br>
<a href="https://www.metal-archives.com/lists/LU">Luxembourg</a><br>
<a href="https://www.metal-archives.com/lists/MG">Madagascar</a><br>
<a href="https://www.metal-archives.com/lists/MY">Malaysia</a><br>
<a href="https://www.metal-archives.com/lists/MV">Maldives</a><br>
<a href="https://www.metal-archives.com/lists/MT">Malta</a><br>
<a href="https://www.metal-archives.com/lists/MU">Mauritius</a><br>
<a href="https://www.metal-archives.com/lists/MX">Mexico</a><br>
<a href="https://www.metal-archives.com/lists/MD">Moldova</a><br>
<a href="https://www.metal-archives.com/lists/MC">Monaco</a><br>
<a href="https://www.metal-archives.com/lists/MN">Mongolia</a><br>
<a href="https://www.metal-archives.com/lists/ME">Montenegro</a><br>
<a href="https://www.metal-archives.com/lists/MA">Morocco</a><br>
<a href="https://www.metal-archives.com/lists/MZ">Mozambique</a><br>
<a href="https://www.metal-archives.com/lists/MM">Myanmar</a><br>
<a href="https://www.metal-archives.com/lists/NA">Namibia</a><br>
<a href="https://www.metal-archives.com/lists/NP">Nepal</a><br>
<a href="https://www.metal-archives.com/lists/NL">Netherlands</a><br>
<a href="https://www.metal-archives.com/lists/NC">New Caledonia</a><br>
</div>
<div class="countryCol">
<a href="https://www.metal-archives.com/lists/NZ">New Zealand</a><br>
<a href="https://www.metal-archives.com/lists/NI">Nicaragua</a><br>
<a href="https://www.metal-archives.com/lists/MK">North Macedonia</a><br>
<a href="https://www.metal-archives.com/lists/NO">Norway</a><br>
<a href="https://www.metal-archives.com/lists/OM">Oman</a><br>
<a href="https://www.metal-archives.com/lists/PK">Pakistan</a><br>
<a href="https://www.metal-archives.com/lists/PS">Palestine</a><br>
<a href="https://www.metal-archives.com/lists/PA">Panama</a><br>
<a href="https://www.metal-archives.com/lists/PY">Paraguay</a><br>
<a href="https://www.metal-archives.com/lists/PE">Peru</a><br>
<a href="https://www.metal-archives.com/lists/PH">Philippines</a><br>
<a href="https://www.metal-archives.com/lists/PL">Poland</a><br>
<a href="https://www.metal-archives.com/lists/PT">Portugal</a><br>
<a href="https://www.metal-archives.com/lists/PR">Puerto Rico</a><br>
<a href="https://www.metal-archives.com/lists/QA">Qatar</a><br>
<a href="https://www.metal-archives.com/lists/RE">Reunion</a><br>
<a href="https://www.metal-archives.com/lists/RO">Romania</a><br>
<a href="https://www.metal-archives.com/lists/RU">Russia</a><br>
<a href="https://www.metal-archives.com/lists/PM">Saint Pierre and Miquelon</a><br>
<a href="https://www.metal-archives.com/lists/SM">San Marino</a><br>
<a href="https://www.metal-archives.com/lists/SA">Saudi Arabia</a><br>
<a href="https://www.metal-archives.com/lists/RS">Serbia</a><br>
<a href="https://www.metal-archives.com/lists/SG">Singapore</a><br>
<a href="https://www.metal-archives.com/lists/SK">Slovakia</a><br>
<a href="https://www.metal-archives.com/lists/SI">Slovenia</a><br>
<a href="https://www.metal-archives.com/lists/ZA">South Africa</a><br>
<a href="https://www.metal-archives.com/lists/ES">Spain</a><br>
<a href="https://www.metal-archives.com/lists/LK">Sri Lanka</a><br>
<a href="https://www.metal-archives.com/lists/SR">Suriname</a><br>
<a href="https://www.metal-archives.com/lists/SJ">Svalbard</a><br>
<a href="https://www.metal-archives.com/lists/SE">Sweden</a><br>
<a href="https://www.metal-archives.com/lists/CH">Switzerland</a><br>
<a href="https://www.metal-archives.com/lists/SY">Syria</a><br>
<a href="https://www.metal-archives.com/lists/TW">Taiwan</a><br>
<a href="https://www.metal-archives.com/lists/TJ">Tajikistan</a><br>
<a href="https://www.metal-archives.com/lists/TH">Thailand</a><br>
<a href="https://www.metal-archives.com/lists/TT">Trinidad and Tobago</a><br>
<a href="https://www.metal-archives.com/lists/TN">Tunisia</a><br>
<a href="https://www.metal-archives.com/lists/TR">Turkey</a><br>
<a href="https://www.metal-archives.com/lists/TM">Turkmenistan</a><br>
<a href="https://www.metal-archives.com/lists/UG">Uganda</a><br>
<a href="https://www.metal-archives.com/lists/UA">Ukraine</a><br>
<a href="https://www.metal-archives.com/lists/AE">United Arab Emirates</a><br>
<a href="https://www.metal-archives.com/lists/GB">United Kingdom</a><br>
<a href="https://www.metal-archives.com/lists/US">United States</a><br>
<a href="https://www.metal-archives.com/lists/ZZ">Unknown</a><br>
<a href="https://www.metal-archives.com/lists/UY">Uruguay</a><br>
<a href="https://www.metal-archives.com/lists/UZ">Uzbekistan</a><br>
<a href="https://www.metal-archives.com/lists/VE">Venezuela</a><br>
<a href="https://www.metal-archives.com/lists/VN">Vietnam</a><br>
<a href="https://www.metal-archives.com/lists/ZW">Zimbabwe</a><br>
</div>
</div> */
}
