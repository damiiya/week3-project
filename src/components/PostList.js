import React from "react";
import styled from "styled-components";

const PostList = () => {
  return (
    <div
      style={{
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CardContainer>
        <ImgWrap>
          <LoadedImage />
        </ImgWrap>
        <BoxWrap>
          <UserWrap>
            <UserImg />
            <UserName>담담이</UserName>
            <Timeline>10:10</Timeline>
          </UserWrap>
          <PostText>진짜 아침이 되었네 너무 졸리다</PostText>
        </BoxWrap>
      </CardContainer>
      <CardContainer>
        <BoxWrap>
          <UserName>담담이</UserName>
          <UserImg />
          <Timeline>10:10</Timeline>
          <PostText>진짜 아침이 되었네 너무 졸리다</PostText>
        </BoxWrap>
        <ImgWrap>
          <LoadedImage />
        </ImgWrap>
      </CardContainer>
    </div>
  );
};

const CardContainer = styled.div`
  width: 510px;
  height: 220px;
  border-radius: 10px;
  border: 5px solid black;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0;
  margin: 20px auto;
  background-color: #96a755;
`;

const ImgWrap = styled.div``;

const LoadedImage = styled.img`
  width: 230px;
  height: 180px;
  margin: 1px;
  border: 2px solid black;
`;

const BoxWrap = styled.div`
  width: 230px;
  height: 180px;
  margin: 1px;
  border: 2px solid black;
  background-color: #f1b641;
  flex-direction: column;
  display: flex;
`;

const UserWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const UserName = styled.p``;

const UserImg = styled.img`
  width: 20px;
  height: 20px;
  border: 2px solid black;
  border-radius: 3px;
`;

const Timeline = styled.p``;

const PostText = styled.text``;

export default PostList;
