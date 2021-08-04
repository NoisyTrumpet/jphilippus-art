import * as React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from "@chakra-ui/react"

const data = {
  nodes: [
    {
      title: `Age Policy`,
      content: `All ages welcome. Children under 11 must be accompanied by an adult.`,
    },
    {
      title: `What To Bring`,
      content: `You can bring food and wine/alcohol and/or drinks. We have a refrigerator and a full counter for you to serve at.`,
    },
        {
      title: `Pick-up Policy`,
      content: `All artwork takes 48 hours to dry. Therefore we ask that you return to the studio at that point to pick up your artwork. Please keep in mind that we are not able to store your artwork in the studio past a 60 day period.`,
    },
  ],
}

const ProductAccordion = () => {
  return data.nodes.map((node, index) => (
    <Accordion allowMultiple="true" key={node.content} mt={5} borderColor="#c09559" key={`${node.title}-${index}`}>
        <AccordionItem>
            <h2>
            <AccordionButton color="#c09559">
                <Box flex="1" textAlign="left" fontWeight="500" fontSize="20px">
                {node.title}
                </Box>
                <AccordionIcon color="#3FA7B6" />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            {node.content}
            </AccordionPanel>
        </AccordionItem>
    </Accordion>
  ))
}

export default ProductAccordion
