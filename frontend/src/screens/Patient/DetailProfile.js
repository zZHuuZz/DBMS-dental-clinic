import React from "react";
import { Table } from "react-bootstrap";

const MedicalRecord = () => {
	return (
		<Table striped bordered hover>
			<thead>
				<tr>
					<th colSpan={5} className='text-center'>
						Medical Record
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td className='font-weight-bold'>ID</td>
					<td colSpan={4} className='font-weight-bold'>
						Service Used
					</td>
				</tr>
				<tr>
					<td>Order</td>
					<td>Name of Service</td>
					<td>Number</td>
					<td>Money</td>
				</tr>
				<tr>
					<td>1</td>
					<td>Dental Cleaning</td>
					<td>1</td>
					<td>$100</td>
				</tr>
				<tr>
					<td colSpan={5} className='text-center font-weight-bold'>
						Additional Information
					</td>
				</tr>
				<tr>
					<td>Name of dentist</td>
					<td colSpan={4} className='font-italic'>
						Dr. Smith
					</td>
				</tr>
			</tbody>
		</Table>
	);
};

export default MedicalRecord;
