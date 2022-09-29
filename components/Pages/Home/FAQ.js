import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { QUESTIONS } from "../../../utils/constants";
import BorderedBottomBox from "../../Wrapper/BorderedBottomBox";

const FAQ = () => {
  return (
    <BorderedBottomBox>
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography variant="h3" component="h3" color="common.white" align="center">
          Frequently Asked Questions
        </Typography>
      </Container>

      {QUESTIONS.map((question) => (
        <Accordion>
          <AccordionSummary>
            <Typography>{question.summary}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{question.details}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}

    </BorderedBottomBox>
  );
};

export default FAQ;
