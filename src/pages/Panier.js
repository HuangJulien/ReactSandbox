import React from 'react';

const Panier = ({details, onDelete, postRemove}) => {

	/*
	function formatTitle(title1){
		var title = title1;
        const deuxPoint = title.indexOf(':');
        var format = title.substring(0,deuxPoint-1);
        while(format.charAt(format.length-1) !== ' ') {
            format = format.substring(0,format.length-1);
        }
		title = format;
		return title;
    }
	*/

	return (
		<div>
			<div>{details.title} : {details.price}€ <button className="btn btn-warning" onClick={() => {onDelete(details.id); postRemove()}}>Retirer</button></div>
		</div>

	)
};

export default Panier;