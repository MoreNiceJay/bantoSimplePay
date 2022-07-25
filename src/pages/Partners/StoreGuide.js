import React from "react";

import { Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

import CustomLeftBox from "../../components/CustomLeftBox";

function StoreGuide() {
  return (
    <>
      <Grid item xs={12} lg={12}>
        <CustomLeftBox sx={{ backgroundColor: "#FAFAFA", padding: "20px" }}>
          <Typography fontSize={{ xs: 23, lg: 30 }}>
            <span style={{ color: "#72BA75" }}>가맹점</span> 가이드 라인
            참고하세요
          </Typography>
        </CustomLeftBox>
      </Grid>

      <Grid item xs={12} lg={4}>
        <CustomLeftBox sx={{ backgroundColor: "#FAFAFA", padding: 3 }}>
          <Stack spacing={{ xs: 4, lg: 8 }}>
            <Typography fontSize={30}>가맹점 역할</Typography>
            <Typography fontSize={15} lineHeight={2} color="#73BA75">
              가맹점은 반토 스테이션을 설치를 요청하고 반토 스테이션을
              관리합니다.
            </Typography>
            <Typography fontSize={15} lineHeight={2}>
              (중요한 관리는 본사에서 직접합니다. 업주는 스테이션 파손, 훼손,
              청결 유지 정도의 관리만 요구됩니다)
            </Typography>
          </Stack>
        </CustomLeftBox>
      </Grid>

      <Grid item xs={12} lg={4}>
        <CustomLeftBox sx={{ backgroundColor: "#FAFAFA", padding: 3 }}>
          <Stack spacing={{ xs: 4, lg: 8 }} lineHeight={2}>
            <Typography fontSize={30}>가맹점 수익</Typography>
            <Typography fontSize={15} lineHeight={2} color="#73BA75">
              가맹점은 가맹점에 설치된 스테이션의 수익의 10~20%의 수익을 정산
              받습니다.
            </Typography>
            <Typography fontSize={15} lineHeight={2}>
              가맹점에서 스테이션을 구매 시 수익의 70%의 수익을 정산 받습니다.
            </Typography>
          </Stack>
        </CustomLeftBox>
      </Grid>

      <Grid item xs={12} lg={4}>
        <CustomLeftBox sx={{ backgroundColor: "#FAFAFA", padding: 3 }}>
          <Stack spacing={{ xs: 5, lg: 7 }}>
            <Typography fontSize={30}>가맹점 수익 분석</Typography>
            <Typography fontSize={15}>
              <span style={{ color: "#73BA75" }}>예)</span> 가맹점의 연간 수익
              분석
            </Typography>
            <Box>
              <Stack spacing={1}>
                <Typography fontSize={15}>
                  무료로 스테이션을 설치 (1일 2회 사용)
                </Typography>
                <Typography fontSize={15}>
                  365일 * (1200원 * 0.2) * 2회 = 175,200원
                </Typography>
                <Typography fontSize={15}>
                  스테이션 구매 후 설치 (1일 2회 사용)
                </Typography>
                <Typography fontSize={15}>
                  365일 * (1200원 * 0.7) * 2회 = 613,200원
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </CustomLeftBox>
      </Grid>
    </>
  );
}

export default StoreGuide;
