"use client";

import Image from "next/image";
import React from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const Project = () => {
  return (
    <div className="min-h-screen bg-transparent py-20 z-[25]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AgriSense AI Card */}
          <Card 
            sx={{ 
              background: 'linear-gradient(to bottom right, #262626, #171717)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              '&:hover': {
                boxShadow: '0 25px 50px -12px rgba(16, 185, 129, 0.1)'
              },
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <CardContent>
              <Typography 
                gutterBottom 
                variant="h5" 
                component="div" 
                sx={{ fontWeight: 'bold', color: '#34d399' }}
              >
                AgriSense AI
              </Typography>
              <Typography variant="body2" sx={{ color: '#d4d4d4', mb: 2 }}>
                A Smart AI-powered agricultural monitoring system for modern farming
              </Typography>
            </CardContent>
            <Box sx={{ position: 'relative', height: '240px', mx: 2 }}>
              <Image
                src="/FasalGuru.jpg"
                height={400}
                width={600}
                className="object-contain rounded-xl"
                alt="AgriSense AI Dashboard"
                priority
                style={{ width: '100%', height: '100%' }}
              />
            </Box>
            <CardActions sx={{ mt: 'auto', p: 2, justifyContent: 'center' }}>
              <Button 
                fullWidth
                onClick={() => {
                  window.location.href = 'https://github.com/Ayaan-tech/T.E-COMP-MP2B';
                }}
                sx={{ 
                  backgroundColor: '#10b981', 
                  color: 'white',
                  textTransform: 'none',
                  borderRadius: '12px',
                  py: 1.5,
                  '&:hover': {
                    backgroundColor: '#059669'
                  }
                }}
              >
                View Project
              </Button>
            </CardActions>
          </Card>

          {/* Vocal Scribe Card */}
          <Card 
            sx={{ 
              background: 'linear-gradient(to bottom right, #262626, #171717)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              '&:hover': {
                boxShadow: '0 25px 50px -12px rgba(168, 85, 247, 0.1)'
              },
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <CardContent>
              <Typography 
                gutterBottom 
                variant="h5" 
                component="div"
                sx={{ fontWeight: 'bold', color: '#a78bfa' }}
              >
                Vocal Scribe
              </Typography>
              <Typography variant="body2" sx={{ color: '#d4d4d4', mb: 2 }}>
                Advanced voice recognition and transcription powered by AI
              </Typography>
            </CardContent>
            <Box sx={{ position: 'relative', height: '240px', mx: 2 }}>
              <Image
                src="/Meet.jpg"
                height={400}
                width={600}
                className="object-contain rounded-xl"
                alt="Vocal Scribe Interface"
                priority
                style={{ width: '100%', height: '100%' }}
              />
            </Box>
            <CardActions sx={{ mt: 'auto', p: 2, justifyContent: 'center' }}>
              <Button 
                fullWidth
                onClick={() => {
                  window.location.href = 'https://meet-iota-flame.vercel.app/';
                }}
                sx={{ 
                  backgroundColor: '#a855f7', 
                  color: 'white',
                  textTransform: 'none',
                  borderRadius: '12px',
                  py: 1.5,
                  '&:hover': {
                    backgroundColor: '#9333ea'
                  }
                }}
              >
                View Project
              </Button>
            </CardActions>
          </Card>

          {/* ImageVision Pro Card */}
          <Card 
            sx={{ 
              background: 'linear-gradient(to bottom right, #262626, #171717)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              '&:hover': {
                boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.1)'
              },
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <CardContent>
              <Typography 
                gutterBottom 
                variant="h5" 
                component="div"
                sx={{ fontWeight: 'bold', color: '#60a5fa' }}
              >
                ImageVision Pro
              </Typography>
              <Typography variant="body2" sx={{ color: '#d4d4d4', mb: 2 }}>
                Next-generation image processing and analysis platform
              </Typography>
            </CardContent>
            <Box sx={{ position: 'relative', height: '240px', mx: 2 }}>
              <Image
                src="/Image.jpg"
                height={400}
                width={600}
                className="object-contain rounded-xl"
                alt="ImageVision Pro Dashboard"
                priority
                style={{ width: '100%', height: '100%' }}
              />
            </Box>
            <CardActions sx={{ mt: 'auto', p: 2, justifyContent: 'center' }}>
              <Button 
                fullWidth
                onClick={() => {
                  window.location.href = 'https://github.com/Ayaan-tech/ImageVision';
                }}
                sx={{ 
                  backgroundColor: '#3b82f6', 
                  color: 'white',
                  textTransform: 'none',
                  borderRadius: '12px',
                  py: 1.5,
                  '&:hover': {
                    backgroundColor: '#2563eb'
                  }
                }}
              >
                View Project
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Project;