import { useState } from "react";
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { QUESTIONS } from "../../../utils/constants";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BorderedBottomBox from "../../Wrapper/BorderedBottomBox";
import GetStartedField from "./GetStartedField";

const CustomAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: theme.palette.grey[900],
  color: theme.palette.common.white
}))

const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.common.black}`,
  padding: theme.spacing(1, 3),
  '&.Mui-expanded': {
    padding: theme.spacing(0, 3)
  }
}))

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const expandHandler = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <BorderedBottomBox>
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography variant="h3" component="h3" color="common.white" align="center" sx={{ mb: 6 }}>
          Frequently Asked Questions
        </Typography>
        <Stack spacing={1} mb={8}>
          {QUESTIONS.map((question) => (
            <CustomAccordion square expanded={expanded === question.id} onChange={expandHandler(question.id)} key={question.id}>
              <CustomAccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h5">{question.summary}</Typography>
              </CustomAccordionSummary>
              <AccordionDetails>
                <Typography variant="h5">{question.details}</Typography>
              </AccordionDetails>
            </CustomAccordion>
          ))}
        </Stack>

        <GetStartedField />
      </Container>
    </BorderedBottomBox>
  );
};

export default FAQ;
