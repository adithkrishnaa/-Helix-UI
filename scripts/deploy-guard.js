/**
 * Build-time Deployment Guard
 * Fails the build if HELIX_DEPLOY_TOKEN is missing in production environment.
 */

if (process.env.NODE_ENV === 'production' || process.env.CI) {
    if (!process.env.HELIX_DEPLOY_TOKEN) {
        console.error('\x1b[31m%s\x1b[0m', 'CRITICAL ERROR: HELIX_DEPLOY_TOKEN is missing!');
        console.error('Production builds require a valid deployment token.');
        process.exit(1);
    }
    console.log('\x1b[32m%s\x1b[0m', 'HELIX_DEPLOY_TOKEN verified. Proceeding with build...');
} else {
    console.log('Skipping deployment guard for local development.');
}
