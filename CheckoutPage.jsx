import { useState } from "react";
import {
	Stepper,
	Step,
	StepLabel,
	Typography,
	Button,
	CircularProgress,
	Grid,
} from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Box from "@mui/material/Box";
import { Formik, Form } from "formik";

import DirectDebitLogo from "/direct-debit.svg";

import InfoSidebar from "./Sidebar/InfoSidebar";

import PersonalDetails from "./Forms/PersonalDetails";
// import PaymentDetails from "./Forms/PaymentDetails";
import BankDetails from "./Forms/BankDetails";
import ReviewDetails from "./ReviewDetails/ReviewDetails";
import CheckoutSuccess from "./CheckoutSuccess/CheckoutSuccess";

import validationSchema from "./FormModel/validationSchema";
import checkoutFormModel from "./FormModel/checkoutFormModel";
import formInitialValues from "./FormModel/formInitialValues";

import useStyles from "./styles";
import { is } from "date-fns/locale";

const steps = ["Personal Details", "Bank Details", "Review Details"];
const { formId, formField } = checkoutFormModel;

function _renderStepContent(step) {
	switch (step) {
		case 0:
			return <PersonalDetails formField={formField} />;
		// case 1:
		// return <PaymentDetails formField={formField} />;
		case 1:
			return <BankDetails formField={formField} />;
		case 2:
			return <ReviewDetails formField={formField} />;
		default:
			return <div>Not Found</div>;
	}
}

const CheckoutPage = () => {
	const classes = useStyles();
	const [activeStep, setActiveStep] = useState(0);
	const currentValidationSchema = validationSchema[activeStep];
	const isLastStep = activeStep === steps.length - 1;

	function _sleep(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	async function _submitForm(values, actions) {
		await _sleep(1000);
		alert(JSON.stringify(values, null, 2));
		actions.setSubmitting(false);
		setActiveStep(activeStep + 1);
	}

	function _handleSubmit(values, actions) {
		if (isLastStep) {
			_submitForm(values, actions);
		} else {
			setActiveStep(activeStep + 1);
			actions.setTouched({});
			actions.setSubmitting(false);
		}
	}

	function _handleBack() {
		setActiveStep(activeStep - 1);
	}
	const reset = (fields, setFieldValue) => {
		if (fields.length) {
			fields.forEach((field) => {
				if (field.name === 'confirmAge' || field.name === 'accountConfirm') {
					setFieldValue(field.name, false, false);
				} else {
					setFieldValue(field.name, "", false);
				}
			})
		}
	}

	const _handleResetStepFields = (setFieldValue) => {
		switch (activeStep) {
			case 0:
				reset([
					formField.title,
					formField.firstName,
					formField.lastName,
					formField.email,
					formField.contactNumber,
					formField.dateOfBirth,
					formField.confirmEmail,
					formField.confirmAge,
					formField.postCode,
					formField.addressLine1,
					formField.addressLine2,
					formField.town,
					formField.county
				], setFieldValue);
				break;
			case 1:
				reset([
					formField.accountName,
					formField.accountNumber,
					formField.sortCode,
					formField.accountConfirm
				], setFieldValue);
				break;
		}
	}

	const _handleCancel = (resetForm) => {
		resetForm();
		setActiveStep(0);
	};

	return (
		<>
			<Grid
				container
				spacing={3}
				alignItems='center'>
				<Grid
					item
					xs={12}>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							flexWrap: "wrap",
							justifyContent: "space-between",
							columnGap: "20px",
							rowGap: "10px",
						}}>
						<Typography
							component='h1'
							variant='h4'
							style={{ marginBottom: "0" }}>
							Direct Debit Setup
						</Typography>
						<img
							src={DirectDebitLogo}
							alt='Direct Debit logo'
							width={120}
							height={50}
						/>
					</Box>
				</Grid>
			</Grid>
			<Grid
				container
				spacing={3}>
				<Grid
					item
					xs={12}
					md={8}>
					<Stepper
						activeStep={activeStep}
						className={classes.stepper}>
						{steps.map((label) => (
							<Step key={label}>
								<StepLabel>{label}</StepLabel>
							</Step>
						))}
					</Stepper>
					<>
						{activeStep === steps.length ? (
							<CheckoutSuccess />
						) : (
							<Formik
								initialValues={formInitialValues}
								validationSchema={currentValidationSchema}
								onSubmit={_handleSubmit}
								validateOnChange={false}
							>
								{({ isSubmitting, setFieldValue, resetForm }) => {
									return (
										<Form id={formId}>
											{_renderStepContent(activeStep)}
											<div className={classes.wrapper}>
												{activeStep !== 0 && (
													<Button
														type='button'
														onClick={_handleBack}
														className={classes.button}>
														{isLastStep ? "Edit Details" : "Back"}
													</Button>
												)}
												<Button
													disabled={isSubmitting}
													variant='contained'
													color='primary'
													fontWeight='semi'
													className={classes.button}
													onClick={() => _handleCancel(resetForm)}
												>
													Cancel
												</Button>
												{!isLastStep && (
													<Button
														disabled={isSubmitting}
														variant='contained'
														color='primary'
														fontWeight='semi'
														className={classes.button}
														onClick={() => _handleResetStepFields(setFieldValue)}
													>
														Reset
													</Button>

												)}
												<Button
													disabled={isSubmitting}
													type='submit'
													variant='contained'
													color='primary'
													fontWeight='semi'
													className={classes.button}>
													{isLastStep ? "Submit Details" : "Next Step"}
												</Button>
												{isSubmitting && (
													<CircularProgress
														size={24}
														className={classes.buttonProgress}
													/>
												)}
											</div>
										</Form>
									);
								}}
							</Formik>
						)}
					</>
				</Grid>
				<Grid
					item
					xs={12}
					md={4}>
					<InfoSidebar />
				</Grid>
			</Grid>
		</>
	);
};

export default CheckoutPage;
