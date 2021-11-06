import { FC } from "react";
import { Global } from "@emotion/react";
import { Container, globalPopupStyles } from "./Popup.styles";

const Popup: FC = () => (
    <>
        <Global styles={globalPopupStyles} />
        <Container>
            <h3>This contenet was rendered from ExtensionPoup.tsx file!</h3>
            <p>
                HINT: Remember to reload the extension in browser setting after change any file in
                your project,
            </p>

            <a href="https://stackoverflow.com/questions/2963260/how-do-i-auto-reload-a-chrome-extension-im-developing">
                or click here and try one of ways described on stackoverflow to automate it! :)
            </a>
        </Container>
    </>
);

export default Popup;
