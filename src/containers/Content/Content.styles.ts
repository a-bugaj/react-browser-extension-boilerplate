import styled from "@emotion/styled";

export const globalStyles = {
    "html, body": {
        overflow: "hidden",
        fontFamily: "sans-serif",
    },
};

export const ContentWrapper = styled.div({
    height: "100vh",
    width: "100%",
    position: "absolute",
    top: 0,
    zIndex: 9999999,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#191c50",

    p: {
        color: "#607d8b",
    },
});

export const Title = styled.h1({
    color: "#fff",
    margin: 0,
    fontSize: 24,
    p: {
        fontSize: 18,
        color: "#5d7988",
    },
});

export const WarningText = styled.p<{ bold?: boolean }>(({ bold }) => ({
    color: "#fff",
    fontWeight: bold ? "bold" : "unset",
    fontSize: 18,
    textAlign: "center",

    a: {
        color: "#fff",
        textDecoration: "underline",
    },
}));
