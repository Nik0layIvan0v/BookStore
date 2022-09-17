import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';

function AlertValidation({ message, isVisible }) {
	return isVisible === true ? (
		<Alert variant="warning">{message}</Alert>
	) : (
		''
	);
}

export default AlertValidation;
