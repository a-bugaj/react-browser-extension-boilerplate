import styled from "@emotion/styled";

export const globalPopupStyles = {
    "html, body": {
        margin: 0,
    },
};

export const Container = styled.div({
    width: "400px",
    backgroundColor: "#191c50",
    padding: 20,

    "h3, p": {
        color: "#fff",
        margin: 0,
        marginBottom: 20,
    },

    a: {
        color: "#fff",
        textDecoration: "underline",
    },
});
