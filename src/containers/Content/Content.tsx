import { FC } from "react";
import { Global } from "@emotion/react";
import { ContentWrapper, Title, WarningText, globalStyles } from "./Content.styles";

const Content: FC = () => (
    <>
        <Global styles={globalStyles} />
        <ContentWrapper>
            <Title>React browser extension boilerplate</Title>
            <p>This content is rendered from ExtensionContent.tsx file</p>
            <br />
            <br />

            <WarningText bold={true}>
                Remember to reload the extension in browser settings after changing any file.
            </WarningText>

            <br />

            <WarningText bold={false}>
                <a href="https://stackoverflow.com/questions/2963260/how-do-i-auto-reload-a-chrome-extension-im-developing">
                    or click here and try one of ways described on stackoverflow to automate it! :)
                </a>
            </WarningText>
        </ContentWrapper>
    </>
);

export default Content;
