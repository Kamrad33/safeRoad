import React, { useEffect, useState } from 'react';
import TableList from './TableList';
import DataBaseSet from './DataBaseSet';

import AdminPage from '../AdminPages/AdminPage'
import './Parser.css';
import {PageHeader, Button, Descriptions, Layout, List, Typography, Divider} from 'antd';

const { Header, Footer, Sider, Content } = Layout;
function Parser (props) {
	const [users, setUsers] = useState([]);
	console.log('users', users);
	var gotParcedData = props.parcerData;
console.log('gotParcedData', gotParcedData);
	const customJSONRef = React.useRef(users);
	console.log('customJSONRef', customJSONRef);
	var value = 'sadsda';
function setParcedData (proprs) {

	console.log('gotParcedData', gotParcedData);
	gotParcedData = JSON.stringify(JSON.parse(gotParcedData));

	console.log('gotParcedData2', gotParcedData);
	 document.getElementById("myTextarea").value = null;
	//customJSONRef = props.parcerData
}

	useEffect(() => {
		async function fetchData() {
			await fetch('')
				.then(response => response.json())
				.then(data => setUsers(data));
		}

		fetchData();
	}, [setUsers])

	function handleSendJSON(e) {

		try {
			setUsers(JSON.parse(customJSONRef.current.value));
			console.log('ddd',JSON.parse(customJSONRef.current.value));
		} catch (e) {
			alert('JSON NOT VALID');
			return false;
		}
	}
	function handleSendJSON2(e) {


			setUsers(JSON.stringify(JSON.parse(gotParcedData)));
			console.log('ddd',JSON.stringify(gotParcedData));

	}

	return (
		<div>
			<div className="json-input"
			style={{display:true}}>
				<textarea
				id = "myTextarea"
				value ={gotParcedData}
					ref={customJSONRef}
					placeholder="Enter custom JSON here"
				></textarea>
					<button onClick={setParcedData}>update</button>
				<button onClick={handleSendJSON}>Send</button>
			</div>
			<div style={{display:"none"}}>
			<TableList  dataList={users}/>
			</div>
			<div className="json-input">
				<textarea

					ref={customJSONRef}
					placeholder="Enter custom JSON here"
				></textarea>
					<button onClick={setParcedData}>update</button>
				<button onClick={handleSendJSON}>Send</button>
			</div>
			<TableList dataList={users}/>
			<DataBaseSet dataSetJSON = {users}/>

		</div>


	);
}
export default Parser;
