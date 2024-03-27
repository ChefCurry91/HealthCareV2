import { staffMembers } from '../dataStaff';

const CardStaff = () => {
	return(
		<div className = 'grid'>{staffMembers.map(index =>
			<div className = 'card' key = {index.id}>
				<h5 className ='name'>{index.name}</h5>
				<img src={index.img} alt="#" />	
				<h5 className='role'>{index.role}</h5> 		
			</div>
			)}
		</div>
	);
};
export default CardStaff;