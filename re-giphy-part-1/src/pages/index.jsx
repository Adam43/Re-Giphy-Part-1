import { Fragment } from "react";
import { Button } from "@chakra-ui/react";


export default function IndexPage() {
    return (
        <Fragment>
            <Button colorScheme="red" size="lg">Click Me! Chakra</Button>
            <button>Click Me! Regular</button>
        </Fragment>
    )
}