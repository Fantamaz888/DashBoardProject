'use client';

import React, { useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  Typography,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';

const ChanelSelect = ({ channels }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tempChannel, setTempChannel] = useState('Все каналы');
  const [appliedChannel, setAppliedChannel] = useState('Все каналы');

  const allChannels = ['Все каналы', ...(channels || [])];

  const handleApply = () => {
    setAppliedChannel(tempChannel);
    setIsOpen(false);
  };

  const handleReset = () => {
    setTempChannel('Все каналы');
    setAppliedChannel('Все каналы');
    setIsOpen(false);
  };

  const isChanged = tempChannel !== appliedChannel;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {/* Desktop / tablet trigger */}
      <Button
        variant="outlined"
        onClick={() => setIsOpen(true)}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          display: { xs: 'none', sm: 'inline-flex' },
          height: 40,
          borderRadius: 2,
          borderColor: '#dce9fe',
          textTransform: 'none',
          fontSize: 14,
          px: 1.5,
          color: '#191919',
          backgroundColor: '#fff',
        }}
      >
        {appliedChannel}
      </Button>

      {/* Mobile CTA button */}
      <IconButton
        onClick={() => setIsOpen(true)}
        aria-label="Открыть фильтры"
        sx={{
          display: { xs: 'inline-flex', sm: 'none' },
          p: 0,
          width: 44,
          height: 44,
          ml: 0.5,
        }}
      >
        <Box
          component="img"
          src="/assets/cta.svg"
          alt="Фильтры"
          sx={{ width: 44, height: 44 }}
        />
      </IconButton>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            pr: 1,
          }}
        >
          <Typography sx={{ fontWeight: 600, fontSize: 18 }}>
            Фильтры
          </Typography>
          <IconButton
            onClick={() => setIsOpen(false)}
            aria-label="Закрыть"
            size="small"
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers sx={{ pt: 2 }}>
          <FormControl fullWidth>
            <InputLabel id="channel-select-label">Канал</InputLabel>
            <Select
              labelId="channel-select-label"
              value={tempChannel}
              label="Канал"
              onChange={(e) => setTempChannel(e.target.value)}
            >
              {allChannels.map((channel) => (
                <MenuItem key={channel} value={channel}>
                  {channel}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>

        <DialogActions
          sx={{
            flexDirection: 'column',
            alignItems: 'stretch',
            gap: 1.5,
            px: 3,
            pb: 3,
          }}
        >
         <Button
    fullWidth
    variant="contained"
    disabled={!isChanged}
    onClick={handleApply}
    sx={{
      textTransform: 'none',
      borderRadius: 2,
      height: 44,
      fontSize: 15,
      background: 'linear-gradient(180deg, #5573e9 0%, #5c10c2 100%)',
      color: '#fff',

      '&:hover': {
        background: 'linear-gradient(180deg, #4764d5 0%, #4d0fa8 100%)',
      },

      '&.Mui-disabled': {
        background: '#d0d0d0',
        color: '#757575',
      },
    }}
  >
    Применить фильтры
  </Button>


  <Button
    fullWidth
    variant="outlined"
    onClick={handleReset}
    sx={{
      textTransform: 'none',
      borderRadius: 2,
      height: 44,
      fontSize: 15,
      borderWidth: 1.5,
      borderColor: '#5b5fff',
      color: '#5b5fff',

      '&:hover': {
        borderColor: '#4a4ee0',
        backgroundColor: 'rgba(91, 95, 255, 0.04)',
      },
    }}
  >
    Сбросить
  </Button>
</DialogActions>
      </Dialog>
    </Box>
  );
};

export default ChanelSelect;
