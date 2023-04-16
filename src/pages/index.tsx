import Layout from "@/components/layouts/Layout";
import EntryList from "@/components/ui/EntryList";
import NewEntry from "@/components/ui/NewEntry";
import { Card,Typography,Grid,CardHeader, CardContent } from "@mui/material";


export default function Home() {
  return (
    <Layout title="Home Open Jira">
        <Grid 
          container
          spacing={2}
        >
          <Grid item xs={12} sm={4} >
            <Card sx={{height:'calc(100vh - 100px)'}}>
                <CardHeader title='Pendientes'/>
                  {/*Agregar entrada */}
                  <NewEntry/>
                  <EntryList  status='pending'/>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} >
            <Card sx={{height:'calc(100vh - 100px)'}}>
                <CardHeader title='En progreso'/>
                  {/*Agregar entrada */}
                  <EntryList status='in-progress'/>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} >
            <Card sx={{height:'calc(100vh - 100px)'}}>
                <CardHeader title='Completadas'/>
                  {/*Agregar entrada */}
                  <EntryList status='finished'/>
            </Card>
          </Grid>
        </Grid>
    </Layout>
    
  )
}
