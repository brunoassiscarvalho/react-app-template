import { Dialog, Grid, DialogTitle, Box, IconButton, DialogContent, DialogActions } from '@mui/material';
import { Close } from '@mui/icons-material';

export default function DialogModal({ title, open, onClose, content, actions, maxWidth = 'xl', children }: any) {
  return (
    <Dialog aria-labelledby="simple-dialog-title" open={open} onClose={onClose} maxWidth={maxWidth}>
      <Grid container>
        <Grid item xs={11}>
          <DialogTitle id="simple-dialog-title" > {title} </DialogTitle>
        </Grid>
        <Grid item xs={1}>
          <Box display="flex" alignItems="center" justifyContent="flex-end">
            <IconButton aria-label="close" onClick={onClose}>
              <Close />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      <DialogContent dividers>
        {content || children}
      </DialogContent>
      {!!actions && <DialogActions>
        {actions}
      </DialogActions>}
    </Dialog>
  );
}